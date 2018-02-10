import React, { Component } from "react";
import router from "../../router";
import "./App.css";

import Header from "../Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {router}
      </div>
    );
  }
}

export default App;
