import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { List } from 'semantic-ui-react';
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
       if (!profile.active) {return null} // don't show profile unless active
       console.log('roster--> profile', profile, profile.active);
        return (
          <div key={profile.profileid} className="profile-individual">
            <div className='profile-information'>
              <h3> <span className="profile-name">{profile.nickname ? profile.nickname : profile.firstname} </span></h3> <br />
              <h4> Name: {profile.firstname} {profile.lastname}</h4><br />
              <p className='profile-information-details'> Address: {profile.address}, {profile.city} {profile.state} </p>
              <p className='profile-information-details'> Phone: {profile.homephone}, Cell: {profile.cellphone ? profile.cellphone : 'none'}</p>
              <p className='profile-information-details'> Email: {profile.email}</p>
            </div>
            <div className='profile-image'>
              <img src={profile.imageurl || './images/blank_profile.jpg'}></img>
            </div>
          </div>
          // <List divided>
          //   <List.Item key={profile.profileid} className="profile-item">
          //     <Link className='nav-btn' to={'/profile/' + profile.profileid}> view </Link>
          //     Name: {profile.nickname}
          //
          //     City: {profile.city} <br />
          //     Email: {profile.email} <hr />
          //   </List.Item>
          // </List>
         )
     })
  }

  render() {
     return(
        <div className="roster-list">
           {this.renderList()}
        </div>
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
