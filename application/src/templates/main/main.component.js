import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {setUser} from '../../store/actions/user/user.action';
import {Navbar} from "../../components/navbar/navbar.component";

import './main.scss';

export const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user)=> {
      dispatch(setUser(user));
    }
  };
};

class Main extends Component {
  componentWillMount() {
    this.props.setUser({
      name: 'Arran'
    });
  }

  redirect(url, method) {
    this.props.router[method](url);
  }

  render() {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element,
  router: PropTypes.object,
  setUser: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
export {Main as MainComponent};
