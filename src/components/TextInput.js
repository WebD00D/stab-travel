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
        <label>Lorem ipsum dolar set amit?</label>
        <input type="text" />
      </div>
    )
  }
}

export default TextInput;
