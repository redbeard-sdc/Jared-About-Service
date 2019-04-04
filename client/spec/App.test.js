import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App/App';
// import AmenitiesList from '../components/AmenitiesList/AmenitiesList';
// import RoomFeaturesList from '../components/RoomFeaturesList/RoomFeaturesList';
// import GoodToKnowList from '../components/GoodToKnowList/GoodToKnowList';
// import HotelLink from '../components/HotelLink/HotelLink';
// import ReviewScores from '../components/ReviewScores/ReviewScores';
// import About from '../components/About/About';
// import Photos from '../components/Photos/Photos';
import { findByTestAttr } from './utils.js';
import './globalMocks';
import { faSkiingNordic } from '@fortawesome/free-solid-svg-icons';

describe('App', () => {
  
  let component;
  beforeEach(() => {
    component = shallow(<App/>);
  });

  it('Should render App without errors', () => {
    const wrapper = component.find('.app');
    expect(wrapper.length).toBe(1);
  });

  it('Should render AmenitiesList without errors', () => {
    const wrapper = component.find('AmenitiesList');
    expect(wrapper.length).toBe(1);
  });

  it('Should render  RoomFeaturesList without errors', () => {
    const wrapper = component.find('RoomFeaturesList');
    expect(wrapper.length).toBe(1);
  });

  it('Should render HotelLink without errors', () => {
    const wrapper = component.find('HotelLink');
    expect(wrapper.length).toBe(1);
  });

  it('Should render GoodToKnowList without errors', () => {
    const wrapper = component.find('GoodToKnowList');
    expect(wrapper.length).toBe(1);
  });

  it('Should render Photos without errors', () => {
    const wrapper = component.find('Photos');
    expect(wrapper.length).toBe(1);
  });

  it('Should render ReviewScores without errors', () => {
    const wrapper = component.find('ReviewScores');
    expect(wrapper.length).toBe(1);
  });

  it('Should render About without errors', () => {
    const wrapper = component.find('About');
    expect(wrapper.length).toBe(1);
  });

  it('Should call getHotel method', () => {
    const spy = jest.spyOn(App.prototype, 'getHotel');
    const wrapper = mount(<App/>);
    wrapper.instance().getHotel();
    expect(spy).toHaveBeenCalled();
  });
});



 
