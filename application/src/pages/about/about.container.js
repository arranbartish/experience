import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import './about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
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

About.propTypes = {
  user: PropTypes.object
};

export default withRouter((connect(mapStateToProps, null)(About)));
export {About as AboutComponent};
