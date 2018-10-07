import React, { Component } from 'react';
import '../App.css';
import theme from '../styles/theme';
import styled, {ThemeProvider} from 'styled-components';

class Header extends Component {
	render(){
		return (
				<Head className="App-header">
					hello world
				</Head>
		);
	}
}

const Head = styled.div`
	background-color: ${props => props.theme.primary};
	width: 100%;
	min-height: 100vh;
`

const Modal = styled.div`
	background-color: ${props => props.theme.primaryLight};
	width: 90%;
	height: 450px;
`


export default Header;
