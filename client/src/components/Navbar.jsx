import React from 'react';
import styled from 'styled-components';

import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => (
	<Nav position="sticky">
		<Toolbar>
			<Menu color="inherit" aria-label="Menu">
				<MenuIcon />
			</Menu>
			<Logo variant="title" color="inherit">
				EciDev
			</Logo>
		</Toolbar>
	</Nav>
)

export default Navbar;

//styled components

const Nav = styled(AppBar)`
background-color: ${props => props.theme.secondary} !important;
flex-grow: 1 !important;
`

const Menu = styled(IconButton)`
margin-left: -12,
margin-right: 20,
`
const Logo = styled(Typography)`
flex-grow: 1 !important;
`
