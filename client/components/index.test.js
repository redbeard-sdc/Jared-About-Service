import React from 'react';
import { shallow } from 'enzyme';

import App from './index'

function setup() {
  const wrapper = shallow(<App/>);
  return wrapper;
}

describe('App test suite', () => {
  it('should display a welcome message', () => {
    const wrapper = setup();
    expect(wrapper.find('Welcome').exists()).toBe(true);
  })
})