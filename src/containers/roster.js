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
       console.log('profile', profile)
        return (
          <List divided>
            <List.Item key={profile.profileid} className="profile-item">
              <Link className='nav-btn' to={'/profile/' + profile.profileid}> view </Link>
              Name: {profile.nickname}

              City: {profile.city} <br />
              Email: {profile.email} <hr />
            </List.Item>
          </List>
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
