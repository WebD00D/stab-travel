import React, { Component } from "react";
import cx from "classnames";
import "../App.css";

class OptionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stab-travel__input">
        <label>Lorem ipsum dolar set amit?</label>
        <div >
            <input
              type="radio"
              id="opt1"
              name="radio-group"
            />
            <label className="stab-travel-radio-label" htmlFor="opt1">
              Option One
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="opt2"
              name="radio-group"
            />
            <label className="stab-travel-radio-label" htmlFor="opt2">
              Option Two
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="opt3"
              name="radio-group"
            />
            <label className="stab-travel-radio-label" htmlFor="opt3">
              Option Three
            </label>
          </div>
      </div>
    )
  }
}

export default OptionList;
