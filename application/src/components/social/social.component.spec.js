import {Social} from './social.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('Social Component', () => {

  const component = shallow(<Social/>);
  it('will be defined', () => {
    expect(Social).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.social').exists()).toBeTruthy();
  });
});
