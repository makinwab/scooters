import React, { Component } from 'react';
import ScooterTableRow from './ScooterTableRow';

class ScooterView extends Component {

  retrieveScooterData = (scooters) => {

  }

	render () {
    const scooters = this.props.scooters;
    console.log(scooters);
    return (
      <table id="scooter-table" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>SCOOTER</th>
            <th>MODEL</th>
            <th>BATTERY</th>
            <th>SCOOTER STATE</th>
          </tr>
        </thead>

        <tbody>
          {/* <ScooterTableRow /> */}
        </tbody>
      </table>
    )
  }
}

export default ScooterView;