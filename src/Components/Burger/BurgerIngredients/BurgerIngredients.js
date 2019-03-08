import React, { Component } from "react";

import "./BurgerIngredients.css";

import PropTypes from "prop-types";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div key="1" className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );

        break;
      case "bread-bottom":
        ingredient = <div key="1.5" className="BreadBottom" />;
        break;
      case "meat":
        ingredient = <div key="2" className="Meat" />;
        break;
      case "cheese":
        ingredient = <div key="3" className="Cheese" />;
        break;
      case "salad":
        ingredient = <div key="4" className="Salad" />;
        break;
      case "bacon":
        ingredient = <div key="5" className="Bacon" />;
        break;
      default:
        ingredient = null;
        break;
    }
    //console.log(ingredient);
    return ingredient;
  }
}
BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredients;
