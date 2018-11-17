import React from "react";

import StartView from "./StartView";
import event from "../lib/react-ga-event";

import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll;

class StartViewContainer extends React.Component {
  handleSayHello = () => {
    scroll.scrollToBottom();

    event("Say Hello", "Clicked on Say Hello button");
  };

  render() {
    return <StartView handleSayHello={this.handleSayHello} />;
  }
}

export default StartViewContainer;
