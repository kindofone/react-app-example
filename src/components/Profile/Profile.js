import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProfileEdit from './ProfileEdit/ProfileEdit';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.setName = this.setName.bind(this);
		
		this.state = {
			age: 13,
			name: props.name
		};
	}

	componentWillMount() {
		console.log();
	}

	componentDidMount() {
		console.log();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.name !== this.props.name) {
			this.setState({
				name: nextProps.name
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return true;
	}

	setName(e) {
		this.setState({
			user: e.target.value
		});
	}

	render() {
		return (
			<div className="profile">
				<p>This is the <mark>Profile</mark> page.</p>
				<h1>Hi, I'm {this.state.user || this.props.name}</h1>
				<div>
					<Route exact path="/profile" render={()=><Link to={this.props.match.url + '/edit'}>Edit</Link>} />
					<Route path={this.props.match.url + '/edit'} component={ProfileEdit} />
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