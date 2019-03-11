import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  console.log(props);
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });
  console.log(ingredientSummary);
  return (
    <Aux>
      <h3>Your Order </h3>
      <p>A delicious burger with the following details</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
