import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import ScooterTable from '../../components/Scooters/ScooterTable';

describe('<ScooterTable />', () => {
  it('renders the ScooterTable component', () => {

    const scooterTableProps = {
      scooters: []
    }

    const div = document.createElement('div');

    ReactDOM.render(<ScooterTable {...scooterTableProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a table element with table headers and table body', () => {
    const scooterTableProps = {
      scooters: []
    }
    const wrapper = shallow(<ScooterTable {...scooterTableProps} />);

    expect(wrapper.find("table").length).toBe(1);
    expect(wrapper.find("table thead").length).toBe(1);
    expect(wrapper.find("table thead th").length).toBe(9);
    expect(wrapper.find("table tbody").length).toBe(1);
  });
});