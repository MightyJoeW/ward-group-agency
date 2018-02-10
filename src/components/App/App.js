import React, { Component } from "react";
import router from "../../router";
import "./App.css";
import "../../styles/base.css";
import "../../styles/settings.css";

import Sidebar from "../Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Sidebar />
        {router}
      </div>
    );
  }
}

export default App;
