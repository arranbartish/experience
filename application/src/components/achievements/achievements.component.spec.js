import {Achievements} from './achievements.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('achievements Component', () => {

  const component = shallow(<Achievements/>);
  it('will be defined', () => {
    expect(Achievements).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.achievements').exists()).toBeTruthy();
  });
});
