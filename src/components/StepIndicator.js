import React, { Component } from "react";
import cx from "classnames";
import "../App.css";

class StepIndicator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var indicators = [];
    for (var i = 1; i < this.props.totalSteps + 1; i++) {
      let className = cx({
        "stab-travel__steps__indicator": true,
        "stab-travel__steps__indicator--viewed":
          i === this.props.currentStep ||
          i <= this.props.currentStep ||
          (i === 1 && this.props.stepOneCompleted) ||
          (i === 2 && this.props.stepTwoCompleted) ||
          (i === 3 && this.props.stepThreeCompleted)
      });

      let currentStep = i;

      indicators.push(
        <div
          key={i}
          className={className}
          onClick={() => this.props.handleStepChange(currentStep)}
        />
      );
    }

    return (
      <div className="stab-travel__steps">
        <div className="stab-travel__steps-label">
          { this.props.currentStep === 4 ? <span>All done</span> : 
              <span>Step {this.props.currentStep} of {this.props.totalSteps}</span>
          }

        </div>
        <div className="stab-travel__steps__indicators">{indicators}</div>
        <div className="stab-travel__steps__title">{this.props.stepTitle}</div>
      </div>
    );
  }
}

export default StepIndicator;
