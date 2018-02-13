import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './ProfileEdit.css';

class ProfileEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}

		this.readInput = this.readInput.bind(this);
	}

	readInput() {
		console.log(this.refs.nameInput.value);
		this.setState({
			name: this.refs.nameInput.value
		});
	}

	render() {
		return (
			<div className="ProfileEdit">
				<input ref="nameInput" onChange={this.readInput} className="input" type="text" placeholder="Enter a new name" />
				<Link className="button" to="/profile">Done</Link>
			</div>
		);
	}
}

export default ProfileEdit;