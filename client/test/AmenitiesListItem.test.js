import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmokingBan, faSmoking } from '@fortawesome/free-solid-svg-icons';
import AmenitiesListItem from '../components/AmenitiesListItem/AmenitiesListItem';


describe('AmenitiesListItem', () => {

  let component;
  beforeEach(() => {
    const props = {
      amenity: 'Non-smoking'
    };
    component = shallow(<AmenitiesListItem {...props}/>);
  });

  it('should render an appropriate icon for each corresponding amenity.', () => {
    const wrapper = component.find('.icon');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('<FontAwesomeIcon />');
  });

  it('should render the amenity name as text', () => {
    const wrapper = component.find('.text');
    expect(wrapper.text()).toBe('Non-smoking');
  });
  
});