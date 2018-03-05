import React, { Component } from "react";
import cx from "classnames";
import "../App.css";
import TextInput from "./TextInput";
import OptionList from "./OptionList";
import TravelButton from "./Button";

class StepOne extends Component {
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
    return (
       // => 'foo bar baz quux'

      <div className={cx('stab-travel__step', { 'd-none': this.props.hidden})}>
        <TextInput
          setAnswer={val => this._setStepAnswers("name", val)}
          labelText="Your name, please."
          type="text"
        />
        <TextInput
          setAnswer={val => this._setStepAnswers("email", val)}
          labelText="Email Address"
          type="text"
        />
        <TextInput
          setAnswer={val => this._setStepAnswers("age", val)}
          labelText="Your age"
          type="number"
        />
        <OptionList
          labelText="Skill level"
          name="skill-level"
          list={[
            "Beginner ( < 1 year )",
            "Competent ( surfing for several years )",
            "Pretty good ( long time keen surfer ) ",
            "Advanced ( surfing consistently for 10+ years )",
            "Ripping"
          ]}
          setAnswer={val => this._setStepAnswers("skill", val)}
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

export default StepOne;
