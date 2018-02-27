import React, { Component } from "react";
import cx from "classnames";
import "../App.css";
import TextInput from "./TextInput";
import OptionList from "./OptionList";
import TravelButton from "./Button";

class StepTwo extends Component {
  constructor(props) {
    super(props);

    this._setStepAnswers = this._setStepAnswers.bind(this);

    this.state = {
      responses: []
    };
  }

  _setStepAnswers(question, answer) {
    const newObject = { question: question, answer: answer };
    let currentObjects = this.state.responses;

    if (currentObjects.length > 0) {
      let updated = false;
      currentObjects.forEach(function(item) {
        if (item.question === question) {
          item.answer = answer;
          updated = true;
        }
      });

      if (!updated) {
        currentObjects.push(newObject);
      }
    } else {
      currentObjects.push(newObject);
    }

    this.setState({
      responses: currentObjects
    });
  }

  render() {

    console.log(this.state.responses)
    return (
      <div className="stab-travel__step">
        <TextInput
          setAnswer={val => this._setStepAnswers("resort charter or hotel", val)}
          labelText="NAME OF RESORT / BOAT CHARTER / HOTEL"
          type="text"
        />
        <TextInput
          setAnswer={val => this._setStepAnswers("location", val)}
          labelText="Where was it?"
          type="text"
        />
        <TextInput
          setAnswer={val => this._setStepAnswers("when and how long", val)}
          labelText="When, and how long did you stay?"
          type="text"
        />
        <TextInput
          setAnswer={val => this._setStepAnswers("waves", val)}
          labelText="Descrive the waves you surfed"
          type="text"
        />
        <TravelButton
          buttonText="Continue"
          handleClick={() =>
            this.props.setStepResponses(this.state.responses)
          }
        />
      </div>
    );
  }
}

export default StepTwo;
