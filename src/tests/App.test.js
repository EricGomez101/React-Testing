import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it ('should have only two nodes as children', () => {
    expect(wrapper.children()).toHaveLength(2)
  })
  it ('wrapper should match the instance of App class', () => {
    expect(wrapper.instance()).toBeInstanceOf(App)
  })
});
