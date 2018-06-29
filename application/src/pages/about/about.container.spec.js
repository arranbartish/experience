import {AboutComponent} from './about.container';
import React from 'react';
import { shallow } from 'enzyme';

describe('About container', () => {

  const user = {};
  const component = shallow(<AboutComponent user={user}/>);
  it('will be defined', () => {
    expect(AboutComponent).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.about').exists()).toBeTruthy();
  });
});
