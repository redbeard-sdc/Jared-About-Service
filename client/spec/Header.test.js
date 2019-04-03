import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header';
import { findByTestAttr } from './utils.js';

const setUp = () => {
  const component = shallow(<Header/>);
  return component;
};

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without error', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should display a title that says About', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.text()).toBe('About');
  });
});


