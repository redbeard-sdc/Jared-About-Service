import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App/App';
import { findByTestAttr } from './utils.js';

const setUp = (props = {}) => {
  const wrapper = shallow(<App {...props}/>);
  return wrapper;
};


describe('App test suite', () => {
  it('should equal 1', () => {
    expect(1).toBe(1);
  });
});


