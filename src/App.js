import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./database";
import cx from "classnames";

import StepIndicator from "./components/StepIndicator";
import OptionList from "./components/OptionList";
import TextInput from "./components/TextInput";
import TravelButton from "./components/Button";
import ItemTag from "./components/ItemTag";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Review from "./components/Review";

class App extends Component {
  constructor(props) {
    super(props);

    this._handleStepChange = this._handleStepChange.bind(this);
    this._setAnswers = this._setAnswers.bind(this);
    this._validateFields = this._validateFields.bind(this);
    this._setPhotos = this._setPhotos.bind(this);
    this._submitGuide = this._submitGuide.bind(this);

    this.state = {
      currentStep: 1,
      totalSteps: 3,
      name: "",
      location: "",
      stepTitle: "Tell us more about you",
      stepOneCompleted: false,
      stepTwoCompleted: false,
      stepThreeCompleted: false,
      errors: false,
      errorMessage: "",

      // STEP ONE ANSWERS
      stepOneAnswers: [],
      stepTwoAnswers: [],
      stepThreeAnswers: [],

      photoOne: "",
      photoTwo: "",
      photoThree: "",
      photoFour: "",
      photoFive: "",

      submitted: false
    };
  }

  _submitGuide() {
    const dateTime = Date.now();

    fire
      .database()
      .ref(`submissions/${dateTime}`)
      .set({
        submittedOn: Date.now(),
        name: this.state.name,
        location: this.state.location,
        stepOneAnswers: this.state.stepOneAnswers,
        stepTwoAnswers: this.state.stepTwoAnswers,
        photoOne: this.state.photoOne,
        photoTwo: this.state.photoTwo,
        photoThree: this.state.photoThree,
        photoFour: this.state.photoFour,
        photoFive: this.state.photoFive,
        read: false,
        active: false,
        published: false
      });

    this.setState({
      submitted: true,
      currentStep: 5
    });

    fetch(
      `https://stabnewsletter-api.herokuapp.com/send-travel-guide-notification`)
      .then(function(response) {
        return response.json();
      })
      .then(function(r) {});
  }

  _validateFields(fields, amount) {
    if (fields.length != amount) {
      return false;
    }

    let hasEmptyFields = false;
    fields.forEach(function(item) {
      if (item.answer.trim() === "") {
        hasEmptyFields = true;
      }
    });

    if (hasEmptyFields) {
      return false;
    } else {
      return true;
    }
  }

  _setAnswers(answers, fieldCount, nextText) {
    if (this.state.currentStep != 3) {
      // we don't require step 3 photos..
      if (!this._validateFields(answers, fieldCount)) {
        this.setState({
          errors: true,
          errorMessage: "Please complete all fields"
        });
        return;
      } else {
        this.setState({
          errors: false,
          currentStep: this.state.currentStep + 1,
          stepTitle: nextText
        });
      }
    } else {
      this.setState({
        currentStep: this.state.currentStep + 1
      });
    }

    switch (this.state.currentStep) {
      case 1:
        this.setState({
          stepOneAnswers: answers
        });
        break;
      case 2:
        this.setState({
          stepTwoAnswers: answers
        });
        break;
      case 3:
        this.setState({
          stepThreeAnswers: answers
        });
        break;
      default:
    }
  }

  _setPhotos(p1, p2, p3, p4, p5) {
    console.log("set photos", p1, p2, p3, p4, p5);

    this.setState({
      stepTitle: "Review and Submit",
      currentStep: 4,
      photoOne: p1,
      photoTwo: p2,
      photoThree: p3,
      photoFour: p4,
      photoFive: p5
    });
  }

  _handleStepChange(stepToGoTo) {
    if (stepToGoTo <= this.state.currentStep) {
      this.setState({
        currentStep: stepToGoTo
      });
    }
  }

  render() {
    return (
      <div className="stab-travel">
        <StepIndicator
          currentStep={this.state.currentStep}
          totalSteps={this.state.totalSteps}
          stepTitle={this.state.stepTitle}
          stepOneCompleted={this.state.stepOneCompleted}
          stepTwoCompleted={this.state.stepTwoCompleted}
          stepThreeCompleted={this.state.stepThreeCompleted}
          handleStepChange={step => this._handleStepChange(step)}
        />

        <StepOne
          hidden={this.state.currentStep != 1}
          setStepResponses={answers =>
            this._setAnswers(answers, 4, "Give us the Scoop")
          }
          setName={val =>
            this.setState({
              name: val
            })
          }
        />

        <StepTwo
          hidden={this.state.currentStep != 2}
          appState={this.state}
          setStepResponses={answers =>
            this._setAnswers(answers, 15, "Share some Photos")
          }
          setLocation={val =>
            this.setState({
              location: val
            })
          }
        />

        <StepThree
          hidden={this.state.currentStep != 3}
          setPhotos={(p1, p2, p3, p4, p5) =>
            this._setPhotos(p1, p2, p3, p4, p5)
          }
        />

        <Review
          hidden={this.state.currentStep != 4}
          submitForm={() => this._submitGuide()}
          editStep={step => this.setState({ currentStep: step })}
          appState={this.state}
        />

        {this.state.submitted ? (
          <div className="stab-travel__step">
            <h3>THANKS!</h3>
            <div>
              Your guide has been submitted and will be reviewed by our staff
            </div>
          </div>
        ) : (
          ""
        )}

        {this.state.errors ? (
          <div className="stab-travel__error">{this.state.errorMessage}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
