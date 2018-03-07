import React, { Component } from "react";
import cx from "classnames";
import "../App.css";

class TextInput extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="stab-travel__input">
        <label>{this.props.labelText}</label>
        <input
          type={this.props.type}
          onChange={e => {
            this.props.setAnswer(e.target.value);

            if ( this.props.specificField ) {
              this.props.setSpecificFild(e.target.value)
            }

          }}

        />
      </div>
    );
  }
}

export default TextInput;
