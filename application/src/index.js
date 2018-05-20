import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {createHistory, useBasename} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
import Root from './root/root.component';
import store from './store/configuration';
import './styles.scss';

const browserHistory = useBasename(createHistory)({
  basename: '/'
});
const history = syncHistoryWithStore(browserHistory, store);

export default render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('app')
);

/* istanbul ignore next: we don't test module.hot  */
if (module.hot) {
  module.hot.accept('./root/root.component', () => {
    const NewRoot = require('./root/root.component').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
