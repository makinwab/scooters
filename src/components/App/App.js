import React, { Component } from 'react';
import './App.css';
import getScooters from '../../api';
import ScooterView from '../Scooters/ScooterView'; 

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

    return (
      <div className="App">
        <header className="App-header">
          Scooters Search
        </header>
        <ScooterView scooters={scooters} />
      </div>
    );
  }
}

export default App;
