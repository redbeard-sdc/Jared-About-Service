import React from 'react';
import { shallow } from 'enzyme';
import RoomFeaturesListItem from '../components/RoomFeaturesListItem/RoomFeaturesListItem';
import { findByTestAttr } from './utils.js';
import './globalMocks';

describe('RoomFeaturesListItem', () => {
  let component;
  beforeEach(() => {
    const props = {
      feature: 'Non-smoking rooms'
    };
    component = shallow(<RoomFeaturesListItem {...props}/>);
  });

  it('Should render without an appropriate feature icon', () => {
    const wrapper = component.find('FontAwesomeIcon');
    expect(wrapper.length).toBe(1);
  });

  it('Should render the room feature name as text', () => {
    const wrapper = component.find('.text');
    expect(wrapper.text()).toBe('Non-smoking rooms');
  });
});