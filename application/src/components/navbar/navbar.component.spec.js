import { Navbar } from './navbar.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('Navbar Component', () => {

  const component = shallow(<Navbar/>);
  it('will be defined', () => {
    expect(Navbar).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.navbar').exists()).toBeTruthy();
  });
});
