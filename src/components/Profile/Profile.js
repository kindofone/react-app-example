import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.setName = this.setName.bind(this);

		this.state = {
			age: 12
		};
	}

	setName(e) {
		this.setState({
			user: e.target.value
		});
	}

	render() {
		return (
			<div className="profile">
				<h1>Hi, I'm {this.state.user || this.props.name}</h1>
				<div>
					<input type="text" onChange={this.setName} />
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	name: PropTypes.string.isRequired
};

Profile.defaultProps = {
	name: "John"
};

export default Profile;