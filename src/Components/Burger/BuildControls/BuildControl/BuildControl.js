import React from "react";
import "./BuildControl.css";
{
  /*onClick={props.Less(props.type)}*/
}
{
  /*onClick={props.More(props.key)}*/
}
const buildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less" onClick={() => props.Less(props.type)}>
        Less
      </button>
      <button className="More" onClick={() => props.More(props.type)}>
        More
      </button>
    </div>
  );
};
export default buildControl;
