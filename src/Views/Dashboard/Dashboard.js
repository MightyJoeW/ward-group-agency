import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
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
      <div className="App">
        <h1> Dashboard </h1>
      </div>
    );
  }
}

export default Dashboard;
