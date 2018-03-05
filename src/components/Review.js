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

    console.log("REVIEW APP STATE", this.props.appState)

    return (

      <div className={cx("stab-travel__step", { "d-none": this.props.hidden })}>
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
            style={{ maxHeight: "150px", marginBottom: "18px", display: "block" }}
            src={this.props.appState.photoOne}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoTwo ? (
          <img
            style={{ maxHeight: "150px", marginBottom: "18px", display: "block" }}
            src={this.props.appState.photoTwo}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoThree ? (
          <img
            style={{ maxHeight: "150px", marginBottom: "18px", display: "block" }}
            src={this.props.appState.photoThree}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoFour ? (
          <img
            style={{ maxHeight: "150px", marginBottom: "18px", display: "block" }}
            src={this.props.appState.photoFour}
          />
        ) : (
          ""
        )}

        {this.props.appState.photoFive ? (
          <img
            style={{ maxHeight: "150px", marginBottom: "18px", display: "block" }}
            src={this.props.appState.photoFive}
          />
        ) : (
          ""
        )}

        <TravelButton
          handleClick={ () => this.props.submitForm() }
          buttonText="Submit" />
      </div>
    );
  }
}

export default Review;
