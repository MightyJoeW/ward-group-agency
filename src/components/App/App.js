import React, { Component } from "react";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import router from "../../router";
import "./App.css";


class App extends Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        {router}
      </MuiThemeProvider>
    );
  }
}

export default App;
