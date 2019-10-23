import React from 'react'
import { shallow, configure } from 'enzyme'
import Button from '../Reusable/Button'
import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });

test('render without crash', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot();
});