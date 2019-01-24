import React from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

const StartView = ({
  isMobile,
  myWorkisVisible,
  handleOpenMenu,
  handleShowMyWork,
  handleSayHello
}) => {
  return (
    <>
      <MyWork myWorkisVisible={myWorkisVisible} />
      <Navbar
        isMobile={isMobile}
        myWorkisVisible={myWorkisVisible}
        handleOpenMenu={handleOpenMenu}
        handleShowMyWork={handleShowMyWork}
        handleSayHello={handleSayHello}
      />
      <Header />
      <Main />
      <Contact />
      <Footer />
    </>
  )
}

export default StartView
