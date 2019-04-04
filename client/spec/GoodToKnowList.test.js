import React from 'react';
import { shallow, mount } from 'enzyme';
import GoodToKnowList from '../components/GoodToKnowList/GoodToKnowList';
import { findByTestAttr } from './utils.js';


describe('GoodToKnowList', () => {

  let component;
  beforeEach(() => {
    const props = {
      hotelStyle: ['Quaint', 'Great View'],
      hotelClass: 4
    };
    component = mount(<GoodToKnowList {...props}/>);
    
  });

  it('should render headings without error', () => {
    const wrapper1 = findByTestAttr(component, 'heading-main');
    expect(wrapper1.text()).toBe('Good To Know');
    
    const wrapper2 = findByTestAttr(component, 'heading-style');
    expect(wrapper2.text()).toBe('HOTEL STYLE');
    
    const wrapper3 = findByTestAttr(component, 'heading-class');
    expect(wrapper3.text()).toBe('HOTEL CLASS');
  });

  it('should reander each descriptor under HOTEL STYLE', () => {
    const wrapper = findByTestAttr(component, 'hotel-style1');
    expect(wrapper.text()).toBe('Quaint');
  });

  it('should render the correct numnber of star icons', () => {
    const wrapper = findByTestAttr(component, 'star-count');
    expect(wrapper.children().length).toBe(4);
  });
});