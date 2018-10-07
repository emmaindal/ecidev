import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

import theme from './styles/theme';
import styled, {ThemeProvider} from 'styled-components';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className="App">
					<Navbar/>
					<Header/>
				</div>
			</ThemeProvider>

		);
	}
}

export default App;
