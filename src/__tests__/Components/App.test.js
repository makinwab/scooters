import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../components/App/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays a filter form', async () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('form input').length).toBe(3);
  });
});
