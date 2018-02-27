import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import StepIndicator from "./components/StepIndicator";
import OptionList from "./components/OptionList";
import TextInput from "./components/TextInput";
import TravelButton from "./components/Button";
import ItemTag from "./components/ItemTag";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

class App extends Component {
  constructor(props) {
    super(props);

    this._handleStepChange = this._handleStepChange.bind(this);
    this._setAnswers = this._setAnswers.bind(this);
    this._validateFields = this._validateFields.bind(this);

    this.state = {
      currentStep: 2,
      totalSteps: 3,
      stepTitle: "Tell us more about you",
      stepOneCompleted: false,
      stepTwoCompleted: false,
      stepThreeCompleted: false,
      errors: false,
      errorMessage: "",

      // STEP ONE ANSWERS
      stepOneAnswers: []
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

    console.log(answers);
    this.setState({
      stepOneAnswers: answers
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

        {this.state.currentStep === 1 ? (
          <StepOne
            setStepResponses={answers => this._setAnswers(answers, 4, "Give us the Scoop")}
          />
        ) : (
          ""
        )}

        {this.state.currentStep === 2 ? (
          <StepTwo
            setStepResponses={answers => this._setAnswers(answers, 4, "Give us the Scoop")}
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
