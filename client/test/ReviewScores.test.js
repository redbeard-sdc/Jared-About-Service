import React from 'react';
import { shallow } from 'enzyme';
import ReviewScore from '../components/ReviewScores/ReviewScores';
import { findByTestAttr } from './utils.js';
import './globalMocks';

describe('ReviewScore', () => {

  let component;
  beforeEach(() => {
    const props = {
      ratings: {
        overall: 3,
        location: 3,
        cleanliness: 4,
        service: 2,
        value: 3
      }
    };
    component = shallow(<ReviewScore {...props}/>);
  });

  it('Should render a number based on overall score', () => {
    const wrapper = component.find('.number');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('3.0');
  });

  it('Should render a count based on number of reviews', () => {
    const wrapper = component.find('.reviewers');
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('3,184 reviews');
  });

  it('should render the type of review for each bubble score', () => {
    const wrapper = component.find('.type');
    expect(wrapper.length).toBe(4);
  });

  it('Should render a bubble score graphic for each type', () => {
    const wrapper = component.find('.bubbles');
    expect(wrapper.length).toBe(4);
  });
});
