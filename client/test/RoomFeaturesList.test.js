import React from 'react';
import { shallow } from 'enzyme';
import ReviewScore from '../components/ReviewScores/ReviewScores';
import { findByTestAttr } from './utils.js.js';
import './globalMocks';

describe('RoomFeaturesList', () => {

  let component;
  beforeEach(() => {
    component = shallow(<RoomFeaturesList/>);
  });

  it('Should render a heading without error', () => {
    const wrapper = component.find('.heading');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('Hotel Links');
  });

  it('Should render each list item', () => {
    const wrapper = findByTestAttr(component, 'RoomFeaturesListItem');
    expect(wrapper.length).toBe(1);
  });

});
