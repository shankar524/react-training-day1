import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task from '../src/components/Task';


configure({ adapter: new Adapter() });

describe('Task Conponent', () => {
  const wrapper = shallow(<Task task='hello'/>);
  test('has correct HTML structure', () => {
    expect(wrapper.html()).toBe('hello');
  });
});
