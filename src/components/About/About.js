import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			forecast: []
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState({
			forecast: nextProps.forecast
		});
	}

	render() {
		return (
			<p>
				This is the <mark>About</mark> page.
				{this.state.forecast}
			</p>
		);
	}
}

export default About;