import React from 'react';
import { shallow, mount } from 'enzyme';
import { describe, it, expect } from 'jest';
import { findByTestAttr } from './utils.js';
import AmenitiesList from '../components/Amenitieslist/AmenitiesList';
import AmenitiesListItem from '../components/AmenitiesListItem/AmenitiesListItem';

const setUp = (props = {}) => {
  const wrapper = shallow(<AmenitiesList {...props}/>);
  return wrapper;
};

describe('Amenities test suite', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render an amenity list item for each amenity in props', () =>{
    const wrapper = findByTestAttr(component, 'list-item-component'); 
  });
});