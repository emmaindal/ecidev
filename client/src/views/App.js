import React, { Component } from 'react'
import ReactGA from 'react-ga'
import './App.css'

import StartViewContainer from './StartView/StartViewContainer'

import theme from '../styles/theme'
import { ThemeProvider, injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: "Lato", "sans-serif";
  }

  body {
    margin: 0;
	padding:0;

	}
`

ReactGA.initialize('UA-128955864-1')
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <StartViewContainer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
