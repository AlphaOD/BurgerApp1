import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger.js";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
//https://www.npmjs.com/package/react-validation
//https://www.npmjs.com/package/simple-react-validator
const ingredient_Prices = {
  salad: 1.1,
  cheese: 1.4,
  meat: 3.6,
  bacon: 0.4
};
const base = {
  salad: 1,
  cheese: 0,
  bacon: 2,
  meat: 0
};
const total =
  base.salad * ingredient_Prices["salad"] +
  base.cheese * ingredient_Prices["cheese"] +
  base.meat * ingredient_Prices["meat"] +
  base.bacon * ingredient_Prices["bacon"];
const defaultState = {
  ingredients: {
    salad: base.salad,
    bacon: base.bacon,
    cheese: base.cheese,
    meat: base.meat
  },
  totalPrice: total,
  purshasable: true,
  order: false
};

class burgerBuilder extends Component {
  state = { ...defaultState };
  componentDidMount = () => {};

  updatePurchaseState(ingredients) {
    console.log("entered");
    console.log(ingredients);
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  OrderHandeler = () => {
    const ord = !this.state.order;
    this.setState({
      order: ord
    });
  };
  OrderCancelationHandeler = () => {
    alert("canceled");
    this.OrderHandeler();
  };
  OrderContinueHandeler = () => {
    alert("placed");
  };
  onMore = key => {
    const oldCount = this.state.ingredients[key];
    console.log(oldCount);
    if (oldCount < 4) {
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[key] = updatedCount;
      const priceAddition = ingredient_Prices[key];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
      this.updatePurchaseState(updatedIngredients);
    } else {
      //  alert("Too Much " + key);
    }
  };
  onLess = key => {
    const oldCount = this.state.ingredients[key];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[key] = updatedCount;
      const priceDeduction = ingredient_Prices[key];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
      this.updatePurchaseState(updatedIngredients);
    } else {
      //  alert("Too Much " + key);
    }
  };

  render() {
    //console.log(this.state.totalPrice);
    return (
      <Aux>
        <Modal visible={this.state.order} clicked={this.OrderHandeler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice.toFixed(2)}
            cancel={this.OrderCancelationHandeler}
            continue={this.OrderContinueHandeler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          purshasable={this.state.purshasable}
          price={this.state.totalPrice.toFixed(2)}
          More={this.onMore}
          Less={this.onLess}
          Q={this.state.ingredients}
          Order={this.OrderHandeler}
        />
      </Aux>
    );
  }
}

export default burgerBuilder;
