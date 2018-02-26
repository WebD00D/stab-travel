
import React, { Component } from "react";
import cx from "classnames";
import "../App.css";

class ItemTag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stab-travel__item-tag">
        <div>{this.props.text}</div>
        <img src={require("../close.png")} />
      </div>
    )
  }
}

export default ItemTag;
