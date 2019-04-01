import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App/App';

const setUp = (props = {}) => {
  const wrapper = shallow(<App {...props}/>);
  return wrapper;
};


describe('App test suite', () => {
  
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should hold all hotel data in state', () => {
    expect(component.state().hotel.name).toBe('Stanley Hotel');
  });
});


