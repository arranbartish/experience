import {Slides} from './slides.component';
import React from 'react';
import { shallow } from 'enzyme';

describe('Slides Component', () => {

  const component = shallow(<Slides/>);
  it('will be defined', () => {
    expect(Slides).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.slides').exists()).toBeTruthy();
  });
});
