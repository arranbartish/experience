import {Portrait} from './portrait.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('Portrait Component', () => {

  const component = shallow(<Portrait/>);
  it('will be defined', () => {
    expect(Portrait).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.portrait').exists()).toBeTruthy();
  });
});
