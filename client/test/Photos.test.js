import React from 'react';
import { shallow, mount } from 'enzyme';
import Photos from '../components/Photos/Photos';
import { findByTestAttr } from './utils.js';
import './globalMocks';
import { O_TRUNC } from 'constants';

describe('Photos', () => {
  let component;
  beforeEach(() => {
    const props = {
      photos: [
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg',
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg',
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley2.jpg',
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley3.jpg',
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley4.jpg',
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley5.jpg',
        'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley6.jpg',
      ] 
    };
    component = mount(<Photos {...props}/>);
  });

  it('Should render this first photo when page loads', () => {
    const wrapper = findByTestAttr(component, 'photo-selected');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg');
    expect(wrapper.type()).toBe('img');
  });

  it('Should change the displayed photo when thumbnail is clicked', () => {
    const wrapper = findByTestAttr(component, 'dt1');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg');
    wrapper.simulate('click');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg');
  });

  it('Should display the next photo when right arrow is clicked', () => {
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg');
    component.find('.right').simulate('click');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg');
    component.find('.right').simulate('click');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley2.jpg');
  });

  it('Should display the previous photo when left arrow is clicked', () => {
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg');
    component.find('.right').simulate('click');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley1.jpg');
    component.find('.left').simulate('click');
    expect(component.state('photo')).toBe('https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg');
  });

});
