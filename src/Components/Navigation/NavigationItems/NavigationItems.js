import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active={true}>
      A link
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Profile
    </NavigationItem>
  </ul>
);

export default navigationItems;
