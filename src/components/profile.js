import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { fetchProfile } from './../actions/action_index';
import PicNameHeader from './pic_name';

class Profile extends Component {

  componentWillMount() {
   this.props.fetchProfile(this.props.params.profileid)
  }

  render() {
     if (!this.props.profiles.profile) {
        return <div>Loading...</div>;
     }
     const profile = this.props.profiles.profile,
          { image, name, email, phone } = this.props.profiles.profile;
    return(
      <div>
        <div className="nav-btn" to="/roster">roster</div>
        <PicNameHeader profile={profile} />
          Profile id:  {profile.profileid}<br />
          {profile.firstname}
      </div>
    );
  }
}

function mapStateToProps({ profiles }) {
   return { profiles };
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchProfile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
