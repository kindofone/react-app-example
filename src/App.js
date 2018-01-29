import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header text="My Awesome App!" />
        <Profile name="Yogev" />
      </div>
    );
  }
}

export default App;
