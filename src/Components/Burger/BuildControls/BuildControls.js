import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price is = <strong>${props.price}</strong>
    </p>
    {controls.map(ctrl => {
      //console.log(props);
      return (
        <BuildControl
          key={ctrl.label}
          type={ctrl.type}
          label={ctrl.label + " " + props.Q[ctrl.type]}
          More={props.More}
          Less={props.Less}
        />
      );
    })}
    <button
      className="OrderButton"
      disabled={!props.purshasable}
      onClick={() => props.Order()}
    >
      Order Now
    </button>
  </div>
);
export default buildControls;
