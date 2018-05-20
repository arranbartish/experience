import {HomeComponent} from './home.container';
import React from 'react';
import { shallow } from 'enzyme';

describe('Home container', () => {

  const user = {};
  const component = shallow(<HomeComponent user={user} />);
  it('should be defined', () => {
    expect(HomeComponent).toBeDefined();
  });

  it('should render', () => {
    expect(component.find('.home').exists()).toBeTruthy();
  });
});
