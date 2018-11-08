import React from "react";
import StartView from "./StartView";

import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll;

class StartViewContainer extends React.Component {
  handleSayHello = () => {
    scroll.scrollToBottom();
  };

  render() {
    return <StartView handleSayHello={this.handleSayHello} />;
  }
}

export default StartViewContainer;
