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
			name: "Yogev"
		};
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
