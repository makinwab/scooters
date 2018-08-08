import React from 'react';

const ScooterTableRow = ({ scooter }) => {
  return(
    <tr>
      <td>{ scooter.id }</td>
      <td>{ scooter.scooter }</td>
      <td>{ scooter.model }</td>
      <td>{ scooter.battery }</td>
      <td>{ scooter.state }</td>
      <td>{ scooter.ticket }</td>
    </tr>
  );
}