import React, { Component } from "react";
import "./styles.css";
import Layout from "./Components/Layout/Layout.js";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <BurgerBuilder />
        <Layout>Test</Layout>
      </div>
    );
  }
}

export default App;
