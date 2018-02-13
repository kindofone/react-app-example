import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = (props) => {
	return (
		<header>
			<span className="app-title">{props.title}</span>
			<Navigation/>
		</header>
	);
}

export default Header;