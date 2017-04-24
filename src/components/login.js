import React, { PropTypes as T } from 'react';
// import { PropTypes as T } from 'prop-types';
import { Link, browserHistory } from 'react-router';
import {ButtonToolbar } from 'react-bootstrap';
import { Button, Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut, getUserProfiles, createProfile, updateProfile, updateLoginProfile, createLoginProfile, fetchRoster } from './../actions/action_index';
import { bindActionCreators } from 'redux';
import AuthService from './../utils/AuthService';
import config from './../../config';
import ResourceLinks from './Resource_Links';

let login = false,
    token = false,
    stopLoop = 0,
    rendercount = 0,
    profile = {},
    userProfileLoaded = false;


export class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      login: false,
      profIndex: null,
      clientid: null,
      checkState: 0
    };
    JSON.parse(localStorage.getItem('profile')) != null ? token = true : token = false;
    this.checkProfile = this.checkProfile.bind(this);
    this.sendToLoginTable = this.sendToLoginTable.bind(this);
  }

  componentWillMount() {
    this.props.fetchRoster()
    this.props.getUserProfiles()
  }

  componentWillUpdate(nextProps = []) {
    if (userProfileLoaded) {stopLoop++; return null} // don't run function if profile is already added/updated
    stopLoop++; if (stopLoop > 10) {return null} // prevent infinite loops
    setTimeout(() => { // delay action to allow system to update
      JSON.parse(localStorage.getItem('profile')) != null ? profile = JSON.parse(localStorage.getItem('profile')) : profile = {};
      if (Object.keys(profile).length === 0) {this.checkProfile(stopLoop)} // if profile is empty, check for updated profile in storage
        else {this.sendToLoginTable(stopLoop)}

    }, 1000 * stopLoop);
  }

  sendToLoginTable(count) {
    if (userProfileLoaded) {return null}
    if (Object.keys(profile).length === 0 || this.props.users.length === 0 || !profile.clientID) {
      return null
    }
    let temp = this.props.users.find(user => user.clientid == profile.clientID) || profile;
    if (this.state.profIndex === temp.loginid && temp.loginid || userProfileLoaded) {return null} // already updated - don't update state again;
    userProfileLoaded === false && temp.loginid ? this.updateLoginTable(temp.loginid) : console.log('');
    if(userProfileLoaded === false && temp) {
      this.addToLoginTable()
    }
    this.setState({ profIndex: temp.loginid }); this.setState({ clientid: profile.clientID });
  }

  checkProfile(count) {
    setTimeout(() => {
      let checkStateCount = this.state.checkState + 1;
      if (this.state.checkState < 5 && !userProfileLoaded) {this.setState({ checkState: checkStateCount})}
    },2000)
    // if there is no active user on state, state should be logged out
    if (this.state.login === true) {
      if (this.props.user.length === 0) {
        this.props.loggedOut();
      }
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.props.loggedOut();
    this.setState({ login : false });
    token = false;
    userProfileLoaded = false;
  }

  render() {
    const { auth } = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <Header centered>
          {this.props.login.login ? "Thank you for visiting our page. Please remember to logout when you're done." : "Please log in to view additional troop information"}
        </Header>
        <Button
          animated='fade'
          color='green'
          onClick={auth.login.bind(this)}
          style={{ display: this.props.login.login ? "none": "inline-block"}}>
        <Button.Content visible>Login </Button.Content>
        <Button.Content hidden><Icon name='sign in' /></Button.Content>
        </Button>
        <Button
          animated='fade'
          color='red'
          onClick={this.logout.bind(this)}
          style={{ display: this.props.login.login ? "inline-block" : "none"}}>
        <Button.Content visible>Logout </Button.Content>
        <Button.Content hidden><Icon name='sign out' /></Button.Content>
        </Button>
        {this.props.login.login ? <ResourceLinks /> : <div></div>}
      </div>
    )
  }

  loginStatus() {
    this.setState({ login: !login });
    if ( JSON.parse(localStorage.getItem('profile')) != null ) {
      this.props.loggedIn();
    } else {
      this.props.loggedOut();
    }
    this.setState({ clientid: JSON.parse(localStorage.getItem('profile')).clientID })
  }

  addToLoginTable() {
    if (userProfileLoaded) {return 'completed'}
    let localProfile = JSON.parse(localStorage.getItem('profile'))
    let loginProfileObj = {
      clientid: localProfile.clientID,
      date: localProfile.created_at,
      lastname: localProfile.family_name,
      firstname: localProfile.given_name,
      picture_sm: localProfile.picture,
      imageurl: localProfile.picture,
      picture_lg: localProfile.picture_large,
      email: localProfile.email || null,
      lastlogin: localProfile.updated_at
    };
    this.props.createLoginProfile(loginProfileObj)
    .then((response) => {
      this.props.loggedIn();
      let data = response.payload.data[0];
      loginProfileObj.clientid = data.clientid;
      if (this.props.roster.find((profile) => { return profile.email === data.email })){
        let activeProfile = this.props.roster.find((profile) => {
          return profile.email === data.email;
        });
        loginProfileObj.id = activeProfile.profileid;
        this.props.updateProfile(loginProfileObj)
          .then((response) => this.props.fetchRoster());
      } else {
        this.props.createProfile(loginProfileObj)
        .then((response) => this.props.fetchRoster());
      }
    })
    userProfileLoaded = true;
  }

  updateLoginTable(id){
    if (userProfileLoaded) {return null}
    if (userProfileLoaded) {return 'completed'}
    let localProfile = JSON.parse(localStorage.getItem('profile'));
    let loginProfileObj = {
      loginid: id,
      clientid: this.state.clientid,
      date: localProfile.created_at,
      lastname: localProfile.family_name,
      firstname: localProfile.given_name,
      picture_sm: localProfile.picture,
      imageurl: localProfile.picture,
      picture_lg: localProfile.picture_large,
      email: localProfile.email || null,
      lastlogin: localProfile.updated_at
    };
    this.props.updateLoginProfile(loginProfileObj)
    .then((response) => {
      this.props.loggedIn();
      let data = response.payload.data[0];
      loginProfileObj.clientid = data.clientid;
      let activeProfile = this.props.roster.find((profile) => {
        return profile.email === data.email;
      });
      loginProfileObj.id = activeProfile.profileid;
      this.props.updateProfile(loginProfileObj);
    });
    userProfileLoaded = true;
  }

}
function mapStateToProps (state) {
  return {
    login: state.login,
    user: state.users.user,
    users: state.users.users,
    roster: state.profiles.roster
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ loggedIn, loggedOut, getUserProfiles, createLoginProfile, updateLoginProfile, createProfile, updateProfile, fetchRoster }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
