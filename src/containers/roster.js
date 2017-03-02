import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { fetchRoster } from './../actions/action_index';


class Roster extends Component {
   componentWillMount(){
      this.props.fetchRoster();
   }

  renderList() {
    if(!this.props.profiles.roster.length) {
      return <div>Loading Roster...</div>;
    }
     return this.props.profiles.roster.map((profile) => {
        return (
            <li key={profile.profileid} className="profile-item">
               Name: {profile.nickname}
               <Link className='nav-btn' to={'/profile/' + profile.profileid}> view </Link> <br />
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
  return bindActionCreators({ fetchRoster }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
