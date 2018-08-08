import React from 'react';

const ScooterTableRow = ({ scooter }) => {
  return(
    <tr>
      <td>{ scooter.id }</td>
      <td>{ scooter.vin }</td>
      <td>{ scooter.model }</td>
      <td>{ scooter.market_id }</td>
      <td>{ scooter.energy_level } %</td>
      <td>{ scooter.license_plate }</td>
      <td>{ scooter.distance_to_travel }</td>
      <td> { scooter.location.lng } </td>
      <td> { scooter.location.lat } </td>
    </tr>
  );
}

export default ScooterTableRow;