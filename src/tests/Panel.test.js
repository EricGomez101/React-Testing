import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it ('should map through all buttons', () => {
    const wrapper = shallow(<Panel />)
    wrapper.find('div.component-panel').children().map((a) => { a.children().map((a) => { expect(a.props().name).not.toBe('')})});
  })
});
