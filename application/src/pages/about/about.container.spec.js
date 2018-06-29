import {AboutComponent} from './about.container';
import React from 'react';
import { shallow } from 'enzyme';

describe('About container', () => {

  const name = 'Arran';
  const component = shallow(<AboutComponent user={name}/>);
  it('will be defined', () => {
    expect(AboutComponent).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.about').exists()).toBeTruthy();
  });
});
