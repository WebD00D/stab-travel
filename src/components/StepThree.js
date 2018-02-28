import React, { Component } from "react";
import cx from "classnames";
import "../App.css";
import TextInput from "./TextInput";
import OptionList from "./OptionList";
import TravelButton from "./Button";
import Dropzone from "react-dropzone";

class StepThree extends Component {
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
      <div className="stab-travel__step">
        <div className="stab-travel__photo--row">

          <div className="stab-travel__photo-wrap">
          <span className="stab-travel__photo-count">1</span>
          <Dropzone className="stab-travel__photo-lg" multiple={false} />
          </div>

          <div className="stab-travel__small-photo-row">
            <div className="stab-travel-small-photo-half">
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">2</span>
                <Dropzone className="stab-travel__photo-sm" multiple={false} />
              </div>
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">3</span>
                <Dropzone className="stab-travel__photo-sm" multiple={false} />
              </div>
            </div>

            <div className="stab-travel-small-photo-half">
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">4</span>
                <Dropzone className="stab-travel__photo-sm" multiple={false} />
              </div>
              <div className="stab-travel__photo-wrap">
                <span className="stab-travel__photo-count">5</span>
                <Dropzone className="stab-travel__photo-sm" multiple={false} />
              </div>
            </div>





          </div>
        </div>

        <TravelButton
          buttonText="Continue"
          handleClick={() => this.props.setStepResponses(this.state.responses)}
        />
      </div>
    );
  }
}

export default StepThree;
