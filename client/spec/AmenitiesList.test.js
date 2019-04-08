import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from './utils.js';
import AmenitiesList from '../components/Amenitieslist/AmenitiesList';
import AmenitiesListItem from '../components/AmenitiesListItem/AmenitiesListItem';


describe('Amenities test suite', () => {

  let component;
  beforeEach(() => {
    const props = {
      amenities: ['Non-smoking', 'Swimming pool', 'Hot tub']
    };
    component = shallow(<AmenitiesList {...props}/>);
  });

  it('should render an amenity list item for each amenity in props.amenities', () =>{
    const wrapper = component.find('AmenitiesListItem');
    expect(wrapper.length).toBe(3); 
  });

  it('should render a heading without error', ( )=> {
    const wrapper = component.find('.heading');
    expect(wrapper.length).toBe(1); 
  });

  it('should should render a clickable div to show more amenities', () => {
    const wrapper = component.find('.show');
    expect(wrapper.length).toBe(1); 
  });

});