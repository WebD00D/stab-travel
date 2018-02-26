import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import StepIndicator from "./components/StepIndicator";
import OptionList from "./components/OptionList";
import TextInput from "./components/TextInput";
import TravelButton from "./components/Button";
import ItemTag from "./components/ItemTag";

class App extends Component {
  constructor(props) {
    super(props);

    this._handleStepChange = this._handleStepChange.bind(this);

    this.state = {
      currentStep: 1,
      totalSteps: 3,
      stepTitle: "Tell us more about you",
      stepOneCompleted: false,
      stepTwoCompleted: false,
      stepThreeCompleted: false
    };
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
        <div className="component-wrap">
          <div style={{ marginBottom: "22px" }}>
            <code>Step Indicators</code>
          </div>

          <StepIndicator
            currentStep={this.state.currentStep}
            totalSteps={this.state.totalSteps}
            stepTitle={this.state.stepTitle}
            stepOneCompleted={this.state.stepOneCompleted}
            stepTwoCompleted={this.state.stepTwoCompleted}
            stepThreeCompleted={this.state.stepThreeCompleted}
            handleStepChange={step => this._handleStepChange(step)}
          />
        </div>{" "}
        {/* END STEP INDICATOR WRAP.. */}
        <div className="component-wrap">
          <div style={{ marginBottom: "22px" }}>
            <code>Input</code>
          </div>

          <TextInput />
        </div>{" "}
        {/* END TEXT INPUT WRAP.. */}
        <div className="component-wrap">
          <div style={{ marginBottom: "22px" }}>
            <code>Radios</code>
          </div>

          <OptionList />
        </div>{" "}
        {/* END RADIO  WRAP.. */}
        <div className="component-wrap">
          <div style={{ marginBottom: "22px" }}>
            <code>Button</code>
          </div>
          <TravelButton />
        </div>{" "}
        {/* END BUTTON WRAP.. */}
        <div className="component-wrap">
          <div style={{ marginBottom: "22px" }}>
            <code>Item Tags</code>
          </div>
          <div className="item-tags">
            <ItemTag text={`5'8" Rusty Dwart`} />
            <ItemTag text={`5'10" Pyzel Ghost`} />
            <ItemTag text={`6'1" Pyzel Ghost`} />
          </div>
        </div>{" "}
        {/* END ITEMS TAGS WRAP.. */}
        <div className="component-wrap">
          <div style={{ marginBottom: "22px" }}>
            <code>Photos</code>
          </div>
        </div>{" "}
        {/* END PHOTO WRAP.. */}
      </div>
    );
  }
}

export default App;
