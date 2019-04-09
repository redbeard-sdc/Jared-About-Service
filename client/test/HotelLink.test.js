import React from 'react';
import { shallow } from 'enzyme';
import HotelLink from '../components/HotelLink/HotelLink';
import { findByTestAttr } from './utils.js';
import './globalMocks';

describe('HotelLink', () => {

  let component;
  beforeEach(() => {
    const props = {
      hotelLink: ''
    };
    component = shallow(<HotelLink {...props}/>);
  });

  it('Should render a heading without error', () => {
    const wrapper = component.find('.heading');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('Hotel Links');
  });

  it('Should render a link to the hotel website', () => {
    const wrapper = findByTestAttr(component, 'link-text');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('Visit hotel website');
  });

});
