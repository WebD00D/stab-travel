import React, { Component } from "react";
import cx from "classnames";
import "../App.css";

class OptionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const listName = this.props.name;
    let options = this.props.list.map(function(item,i){

      return (
        <div key={i}>
          <input
            type="radio"
            id={item}
            name={listName}
            onChange={ () => this.props.setAnswer(item) }
          />
          <label className="stab-travel-radio-label" htmlFor={item}>
            {item}
          </label>
        </div>
      )

    }.bind(this))

    return (
      <div className="stab-travel__input">
        <label>{this.props.labelText}</label>
        <div style={{marginTop: '14px'}}>{options}</div>
      </div>
    )
  }
}

export default OptionList;
