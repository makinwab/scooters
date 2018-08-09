import React, { Component } from 'react';
import './App.css';
import getScooters from '../../api';
import ScooterTable from '../Scooters/ScooterTable'; 

class App extends Component {
  state = {
    scooters: [],
    loading: true,
  }

  componentDidMount() {
    this.fetchScooters();
    setInterval(this.fetchScooters, 10000);
  }

  fetchScooters = (searchTerm) => {
    getScooters()
      .then((result) => {
        this.setState(this.parseScooterData(
          result.data.data.scooters,
          searchTerm
        ));
      })
      .catch(error => console.error("Error occurred", error));
  }

  handleFilter = (event) => {
    event.preventDefault();
    this.fetchScooters(event.target[0].value);
  }

  handleReset = () => {
    this.fetchScooters();
  }

  parseScooterData = (scooters, searchTerm) => {
    let scootersList = [];

    scooters.forEach(data => {
      scootersList = scootersList.concat(data);
    });

    if (searchTerm) {
      scootersList = this.filterScootersByModel(scootersList, searchTerm);
    }

    return { scooters: scootersList, loading: false };
  }

  filterScootersByModel = (scooters, term) => {
    return scooters.filter(scooter => {
      const regex = new RegExp(term, 'gi');
      return scooter.model.search(regex) === 0;
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={this.handleFilter} >
              <input type="text" placeholder="Search by Model" name="searchTerm" className="filter"/>
              <input className="button" type="submit" value="Filter Scooters" onSubmit={this.handleFilter} />
              <input className="button" type="reset" onClick={this.handleReset} value="Clear Filter"/>
            </form>
          </header>

          Loading....
        </div>
      );
    }

    const scooter = this.state.scooters;

    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleFilter} >
            <input type="text" placeholder="Search by Model" name="searchTerm" className="filter"/>
            <input className="button" type="submit" value="Filter Scooters" onSubmit={this.handleFilter} />
            <input className="button" type="reset" onClick={this.handleReset} value="Clear Filter"/>
          </form>
        </header>
        
        <ScooterTable scooters={scooter} />
      </div>
    );
  }
}

export default App;
