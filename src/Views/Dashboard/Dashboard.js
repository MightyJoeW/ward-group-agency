import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";

import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

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
      <div className="dashboard-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
