import React, { Component } from "react";
import cx from "classnames";
import "../App.css";
import TravelButton from "./Button";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepOneAnswers: []
    };
  }

  componentDidMount() {
    console.log("C MOUNT", this.props.appState.stepOneAnswers);
    this.setState({
      stepOneAnswers: this.props.appState.stepOneAnswers
    });
  }

  render() {
    let stepOneAnswers = this.props.appState.stepOneAnswers.map(
      function(item, i) {
        console.log(item);
        return (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div style={{ textTransform: "uppercase", marginBottom: "4px" }}>
              <b>{item.question}</b>
            </div>
            <div>{item.answer}</div>
          </div>
        );
      }.bind(this)
    );

    let stepTwoAnswers = this.props.appState.stepTwoAnswers.map(
      function(item, i) {
        console.log(item);
        return (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div style={{ textTransform: "capitalize", marginBottom: "4px" }}>
              <b>{item.question}</b>
            </div>
            <div>{item.answer}</div>
          </div>
        );
      }.bind(this)
    );

    return (
      <div className="stab-travel__steps">
        <h3>
          ABOUT YOU{" "}
          <small onClick={() => this.props.editStep(1)} className="edit-link">
            edit
          </small>
        </h3>
        {stepOneAnswers}
        <hr />
        <h3>
          ABOUT THE TRIP{" "}
          <small onClick={() => this.props.editStep(2)} className="edit-link">
            edit
          </small>
        </h3>
        {stepTwoAnswers}
        <hr />
        <h3>
          PHOTOS{" "}
          <small onClick={() => this.props.editStep(3)} className="edit-link">
            edit
          </small>
        </h3>

        {this.props.appState.photoOne ? (
          <img
            style={{ maxHeight: "150px", display: "block" }}
            src={this.props.appState.photoOne.preview}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoTwo ? (
          <img
            style={{ maxHeight: "150px", display: "block" }}
            src={this.props.appState.photoTwo.preview}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoThree ? (
          <img
            style={{ maxHeight: "150px", display: "block" }}
            src={this.props.appState.photoThree.preview}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoFour ? (
          <img
            style={{ maxHeight: "150px", display: "block" }}
            src={this.props.appState.photoFour.preview}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoFive ? (
          <img
            style={{ maxHeight: "150px", display: "block" }}
            src={this.props.appState.photoFive.preview}
          />
        ) : (
          ""
        )}


        <TravelButton buttonText="Submit" />
      </div>
    );
  }
}

export default Review;
