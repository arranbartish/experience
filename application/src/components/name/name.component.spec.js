import {Name} from './name.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('Name Component', () => {

  const component = shallow(<Name/>);
  it('will be defined', () => {
    expect(Name).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.name').exists()).toBeTruthy();
  });
});
