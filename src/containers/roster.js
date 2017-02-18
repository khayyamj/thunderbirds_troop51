import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import {action} from './../actions/Actions';

class Roster extends Component {
  renderList() {
     return this.props.profiles.map((profile) => {
        return (
            <li key={profile.email} className="profile-item">
               Name: {profile.firstName} <br />
               City: {profile.city} <br />
               Email: {profile.email} <hr />
            </li>
         )
     })
  }

  render() {
     return(
        <ul className="roster-list">
           {this.renderList()}
        </ul>
     )
  }
}
const mapStateToProps = function({ profiles }) {
  return { profiles }
};
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ action }, dispatch);
}
export default connect(mapStateToProps)(Roster);