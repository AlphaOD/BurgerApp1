import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const modal = props => {
  if (props.visible) {
    return (
      <Aux>
        <Backdrop show={props.visible} clicked={props.clicked} />{" "}
        <div className="Modal">{props.children}</div>
      </Aux>
    );
  } else {
    return null;
  }
};

export default modal;
