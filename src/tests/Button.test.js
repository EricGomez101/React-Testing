import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const wrapper = shallow(<Button name='hello world' clickHandler={() => {wrapper.setProps({name:'hello'})}}/>);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it ('should return one child node, which is the button html element.', () => {
    expect(wrapper).toHaveLength(1);
  })
  it ('simulate a click that changes the prop "name" to hello', () => {
    expect(wrapper.instance().props.name).toBe('hello world');
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().props.name).toBe('hello');
  })
});
