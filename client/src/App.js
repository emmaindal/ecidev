import React, { ReactDOM, Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Contact from "./components/Contact";

import * as Scroll from "react-scroll";
import { Events } from "react-scroll";

import theme from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";

let scroll = Scroll.animateScroll;

class App extends Component {
  handleSayHello = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar handleSayHello={this.handleSayHello} />
          <Header />
          <Main />
          <Contact />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
