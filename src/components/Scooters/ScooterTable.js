import React from 'react';
import './Scooters.css';
import ScooterTableRow from './ScooterTableRow';

const ScooterTable = ({ scooters }) => (
  <table className="scooter-table" border={1}>
    <thead>
      <tr>
        <th><input type="checkbox" /></th>
        <th>ID</th>
        <th>VIN</th>
        <th>MODEL</th>
        <th>MARKET ID</th>
        <th>BATTERY</th>
        <th>LICENSE PLATE</th>
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