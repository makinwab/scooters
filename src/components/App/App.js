import React, { Component } from 'react';
import './App.css';
import getScooters from '../../api'; 

class App extends Component {
  state = {
    scooters: []
  }

  componentDidMount() {
    getScooters()
      .then((result) => {
        this.setState({ scooters: result.data.data });
      })
      .catch(error => console.error("Error occurred", error));
  }

  render() {
    const scooters = this.state.scooters;
    console.log(scooters);
    return (
      <div className="App">
        <header className="App-header">
          Scooters Search
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
