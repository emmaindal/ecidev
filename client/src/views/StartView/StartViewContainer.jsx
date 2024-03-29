import React from 'react'

import StartView from './StartView'
import event from '../lib/react-ga-event'

import * as Scroll from 'react-scroll'
let scroll = Scroll.animateScroll

class StartViewContainer extends React.Component {
  state = {
    myWorkisVisible: false,
    isMobile: false
  }

  handleSayHello = () => {
    scroll.scrollToBottom()

    event('Say Hello', 'Clicked on Say Hello button')
  }

  handleOpenMenu = () => {
    console.log('blabla')
  }

  handleShowMyWork = () => {
    this.setState(prevState => ({
      myWorkisVisible: !prevState.myWorkisVisible
    }))
  }

  render() {
    const { myWorkisVisible, isMobile } = this.state
    return (
      <StartView
        isMobile={isMobile}
        myWorkisVisible={myWorkisVisible}
        handleOpenMenu={this.handleOpenMenu}
        handleShowMyWork={this.handleShowMyWork}
        handleSayHello={this.handleSayHello}
      />
    )
  }
}

export default StartViewContainer
