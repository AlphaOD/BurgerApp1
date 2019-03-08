import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients.js";

const burger = props => {
  let Ing = Object.keys(props.ingredients)
    .map(igkeys => {
      return [...Array(props.ingredients[igkeys])].map((_, i) => {
        return <BurgerIngredients key={igkeys + i} type={igkeys} />;
      }); //(_) means no argument
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  //console.log(Ing);
  if (Ing.length === 0) {
    Ing = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {Ing}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
