import React from "react";
import "./Modal.css";

const modal = props => {
  if (props.visible) {
    return <div className="Modal">{props.children}</div>;
  } else {
    return null;
  }
};

export default modal;
