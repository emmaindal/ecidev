import React, { Component } from "react";
import "./App.css";

import StartViewContainer from "./StartView/StartViewContainer";

import theme from "../styles/theme";
import { ThemeProvider, injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: "Lato", "sans-serif";
  }

  body {
    margin: 0;
	padding:0;
	
	}
`;
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
