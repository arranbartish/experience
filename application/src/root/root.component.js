import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './root.routes';
import PropTypes from 'prop-types';


class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router
          onUpdate={()=> window.scrollTo(0,0)}
          history={history}
          routes={routes}
        />
      </Provider>
    );
  }
}

export default Root;

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
