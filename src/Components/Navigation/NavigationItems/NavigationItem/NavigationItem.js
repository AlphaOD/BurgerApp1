import React from "react";
import "./NavigationItem.css";
import classes from "./NavigationItem.css";
const navigationItem = props => (
  <li className="NavigtionItem">
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.chilren}
    </a>
  </li>
);

export default navigationItem;
