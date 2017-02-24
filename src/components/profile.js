import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { fetchProfile } from './../actions/action_index';

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {profile: undefined};
  // }

  componentWillMount() {
   this.props.fetchProfile(this.props.params.profileid)
  }

  // request is being returned with the correct information
  // but this page is not re-rendering with the new information.
  // ===============================================================

  render() {
     console.log('Profile page --> ', this.props.profiles.profile);
     if (!this.props.profiles.profile) {
        return <div>Loading...</div>;
     }
     const profile = this.props.profiles.profile;
    return(
      <div>
      <div className="nav-btn" to="/roster">roster</div>
      Profile Page <br />
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
