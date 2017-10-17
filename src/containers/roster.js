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
        return (
          <div key={profile.profileid} className="profile-individual">
            <div className='profile-information'>
              <h3> <span className="profile-name">{profile.nickname ? profile.nickname : profile.firstname} {profile.lastname.charAt(0).toUpperCase()}</span></h3> <br />
              <p className='profile-information-details'> <span className="bold">Address:</span> {profile.address}, {profile.city} {profile.state} </p>
              <p className='profile-information-details'> <span className="bold">Phone:</span> {profile.homephone}, <span className="bold">Cell:</span> {profile.cellphone ? profile.cellphone : 'none'}</p>
              <p className='profile-information-details'> <span className="bold">Email:</span> {profile.email}</p>
            </div>
            <div className='profile-image'>
              <img src={profile.imageurl || './images/blank_profile.jpg'}></img>
            </div>
          </div>
         )
     })
  }

  render() {
     return(
        <div className="page-container">
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
