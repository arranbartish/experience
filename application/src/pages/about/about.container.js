import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Portrait} from '../../components/portrait/portrait.component';
import {Name} from '../../components/name/name.component';
import {Achievements} from '../../components/achievements/achievements.component';


import './about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="row">
          <Portrait/>
        </div>
        <div className="row">
          <Name/>
        </div>
        <div className="row">
          <Achievements/>
        </div>

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
