import React, { Component } from "react";
import cx from "classnames";
import "../App.css";

class TravelButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() => this.props.handleClick()}
        className="stab-travel__button"
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default TravelButton;
