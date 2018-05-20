import React from 'react';
import {mount} from 'enzyme';
import Root from './root.component';
import configureMockStore from 'redux-mock-store';
jest.mock('react-router');
const mockStore = configureMockStore();
const state = {
  empty: {},
};
const props = {
  store: mockStore(state.notEmpty),
  history: {}
};

describe('Root component',() => {
  it('should initialize',() => {
    let actual;
    const component = mount(
      <Root {...props} />
    );
    actual = component.find('Provider');
    expect(actual.exists()).toBeTruthy();
  });

  it('should set the Router correctly',() => {
    const component = mount(
      <Root {...props} />
    );
    const router = component.find('Router');
    window.scrollTo = jest.fn();
    expect(router.props()).toHaveProperty('onUpdate');
    router.prop('onUpdate')();
    expect(window.scrollTo).toHaveBeenCalledWith(0,0);
    expect(router.props()).toHaveProperty('history');
    expect(router.props()).toHaveProperty('routes');
  });
});
