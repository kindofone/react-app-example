import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
	render() {
		return (
			<nav className="nav-menu">
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/profile">Profile</Link>
				<Link className="nav-link" to="/about">About</Link>
			</nav>
		)
	}
}

export default Navigation;