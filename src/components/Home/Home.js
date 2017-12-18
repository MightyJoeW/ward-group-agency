import React, { Component } from "react";
// import logo from "../../logo.svg";
import axios from "axios";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/recap/austin`)
      .then(response => {
        this.setState({ test: response.data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default Home;
