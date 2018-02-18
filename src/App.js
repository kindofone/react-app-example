import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import About from './components/About/About';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Yogev",
			forecast: []
		};
	}

	componentDidMount() {
		fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/')
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data);
			let forecast = data.consolidated_weather.map((day) => {
				let imageUrl = `https://www.metaweather.com/static/img/weather/png/64/${day.weather_state_abbr}.png`;
				return (
					<div className="day">
						<img src={imageUrl} />
					</div>
				);
			});
			this.setState({
				forecast: forecast
			});
		});
	}

	changeYogevToZiv() {
		this.setState({name: "Ziv"});
	}

  render() {
    return (
      <div className="App">
				<Header title="My Awesome App!" />
				<Route exact path="/" component={Home} />
				<Route path="/profile" component={Profile} />
				<Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
