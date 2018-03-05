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

    this.state = {
      currentStep: 1,
      totalSteps: 3,
      stepTitle: "Tell us more about you",
      stepOneCompleted: false,
      stepTwoCompleted: false,
      stepThreeCompleted: false,
      errors: false,
      errorMessage: "",

      // STEP ONE ANSWERS
      stepOneAnswers: [
        { question: "name", answer: "Christian" },
        { question: "email", answer: "rva.christian91@mail.com" }
      ],
      stepTwoAnswers: [],
      stepThreeAnswers: [],

      photoOne: "",
      photoTwo: "",
      photoThree: "",
      photoFour: "",
      photoFive: ""
    };
  }

  _validateFields(fields, amount) {
    console.log(!fields.length === amount);
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
    console.log("APP STATE", this.state);

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
        />

        <StepTwo
          hidden={this.state.currentStep != 2}
          appState={this.state}
          setStepResponses={answers =>
            this._setAnswers(answers, 15, "Share some Photos")
          }
        />

        <StepThree
          hidden={this.state.currentStep != 3}
          setPhotos={(p1, p2, p3, p4, p5) =>
            this._setPhotos(p1, p2, p3, p4, p5)
          }
        />

        {this.state.currentStep === 4 ? (
          <Review
            editStep={step => this.setState({ currentStep: step })}
            appState={this.state}
          />
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
