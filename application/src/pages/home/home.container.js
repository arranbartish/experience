import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hello {this.props.user.name}!</h1>
        <p className="lead">This is where Arran will describe himself.<br />He will go through some detail and that is ok.</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

Home.propTypes = {
  user: PropTypes.object
};

export default withRouter((connect(mapStateToProps, null)(Home)));
export {Home as HomeComponent};
