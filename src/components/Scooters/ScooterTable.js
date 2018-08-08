import React from 'react';
import ScooterTableRow from './ScooterTableRow';

const ScooterTable = ({ scooters }) => (
  <table id="scooter-table" border={1}>
    <thead>
      <tr>
        <th>ID</th>
        <th>VIN</th>
        <th>MODEL</th>
        <th>MARKET ID</th>
        <th>LICENSE PLATE</th>
        <th>BATTERY</th>
        <th>DISTANCE TO TRAVEL</th>
        <th colSpan="2">LOCATION (LNG, LAT)</th>
      </tr>
    </thead>

    <tbody>
      {scooters.map((scooter) => <ScooterTableRow key={scooter.id} scooter={scooter}/>)}
    </tbody>
  </table>
)

export default ScooterTable;