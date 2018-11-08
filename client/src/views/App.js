import React, { Component } from "react";
import "./App.css";

import StartViewContainer from "./StartView/StartViewContainer";

import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <StartViewContainer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
