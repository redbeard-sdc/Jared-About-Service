import React from 'react';
import { shallow } from 'enzyme';
import RoomFeaturesList from '../components/RoomFeaturesList/RoomFeaturesList';
import RoomFeaturesListItem from '../components/RoomFeaturesListItem/RoomFeaturesListItem';
import { findByTestAttr } from './utils.js';
import './globalMocks';

describe('RoomFeaturesList', () => {
  let component;
  beforeEach(() => {
    const props = {
      features: ['Accessible rooms', 'Suites', 'Non-smoking rooms']
    };
    component = shallow(<RoomFeaturesList {...props}/>);
  });

  it('Should render a heading without error', () => {
    const wrapper = component.find('.heading');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('Room Features');
  });

  it('Should render each list item', () => {
    const wrapper = component.find('RoomFeaturesListItem');
    expect(wrapper.length).toBe(3);
  });

});
