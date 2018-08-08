import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import ScooterTableRow from '../../components/Scooters/ScooterTableRow';

describe('<ScooterTableRow />', () => {
  it('renders the ScooterTableRow component', () => {

    const scooterTableRowProps = {
      scooter: {
        id: '1234',
        vin: 'ab78',
      }
    }

    const ul = document.createElement('ul');

    ReactDOM.render(<ScooterTableRow {...scooterTableRowProps} />, ul);
    ReactDOM.unmountComponentAtNode(ul);
  });

  it('display table rows with table data', () => {
    const scooterTableRowProps = {
      scooter: {
        id: '1234',
        vin: 'ab78',
        model: 'gorgoi',
        market_id: 'id',
        energy_level: '70',
        license_plate: 'lil',
        distance_to_travel: '43',
        location:{
          lng: '433',
          lat: '333'
        }
      }
    }
    const wrapper = shallow(<ScooterTableRow {...scooterTableRowProps} />);

    expect(wrapper.find("tr").length).toBe(1);
    expect(wrapper.find("tr td").length).toBe(9);
  });
});