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
      .then(response => console.log('componentWillMount--> Roster array returned'));
    this.props.getUserProfiles()
      .then(response => console.log('componentWillMount--> Users array returned'));
  }
    // -------------------------------------------------
    // check if user logged in from another page
    // if user logged in from another page, send them
    // back to that page automatically
    // -------------------------------------------------


  componentWillUpdate(nextProps = []) {
    console.log(stopLoop,'- componentWillUpdate--> userProfileLoaded: ', userProfileLoaded);
    if (userProfileLoaded) {console.log(stopLoop,'- userProfileLoaded, ending function'); stopLoop++; return null} // don't run function if profile is already added/updated
    stopLoop++; if (stopLoop > 10) {return null} // prevent infinite loops
    setTimeout(() => { // delay action to allow system to update
      JSON.parse(localStorage.getItem('profile')) != null ? profile = JSON.parse(localStorage.getItem('profile')) : profile = {};
      console.log('componentWillUpdate--> need checkProfile function: ', Object.keys(profile).length === 0);
      if (Object.keys(profile).length === 0) {this.checkProfile(stopLoop)} // if profile is empty, check for updated profile in storage
        else {this.sendToLoginTable(stopLoop)}

    }, 1000 * stopLoop);
  }

  sendToLoginTable(count) {
    if (userProfileLoaded) {console.log('sendToLoginTable function terminated'); return null}
    console.log(count, '-> sendToLoginTable function called')
    console.log("add/update profile function to be called: ", !(Object.keys(profile).length === 0 || this.props.users.length === 0 || !profile.clientID))
    console.log("check - profile: ", !(Object.keys(profile).length === 0));
    console.log("check - users array: ", !(this.props.users.length === 0), this.props.users);
    console.log("check - clientid: ", (!this.state.clientid), profile.clientID);
    if (Object.keys(profile).length === 0 || this.props.users.length === 0 || !profile.clientID) {
      return null
    }
    let temp = this.props.users.find(user => user.clientid == profile.clientID) || profile;
    console.log('sendToLoginTable--> profile to add/update: ', profile);
    console.log('if test: ', !!(this.state.profIndex === temp.loginid && temp.loginid || userProfileLoaded));
    console.log('if check profIndex: ', this.state.profIndex);
    console.log('if check loginid: ', temp.loginid);
    console.log('if check userProfileLoaded: ', userProfileLoaded);
    if (this.state.profIndex === temp.loginid && temp.loginid || userProfileLoaded) {console.log('if test: true, ending function'); return null} // already updated - don't update state again;
    console.log('updateLoginTable--> ', !!(userProfileLoaded === false && temp.loginid));
    userProfileLoaded === false && temp.loginid ? this.updateLoginTable(temp.loginid) : console.log('Profile not updated--> userProfileLoaded: ', userProfileLoaded, 'temp ', temp);
    if(userProfileLoaded === false && temp) {
      this.addToLoginTable()
      .then((response) => {
        console.log('- profile added to login table ****** Need next function...')
      })
    }
    this.setState({ profIndex: temp.loginid }); this.setState({ clientid: profile.clientID });
  }

  checkProfile(count) {
    console.log(count, '-> checkProfile function called')
    setTimeout(() => {
      let checkStateCount = this.state.checkState + 1;
      if (this.state.checkState < 5 && !userProfileLoaded) {this.setState({ checkState: checkStateCount})}
      console.log('checkStateCounter: ', this.state.checkState);
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
    console.log('- userProfileLoaded: ', userProfileLoaded);
  }

  render() {
    console.log('*** login render count: ', rendercount); rendercount++;
    const { auth } = this.props;
    token === this.state.login ? console.log('render--> login tokens match: ', token) : this.loginStatus();
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
      <ResourceLinks style={{ display: this.props.login.login ? "inline-block" : "none"}} />
      </div>
    )
  }

  loginStatus() {
    this.setState({ login: !login });
    if ( JSON.parse(localStorage.getItem('profile')) != null ) {
      this.props.loggedIn();
      console.log('loggedIn function called: loginStatus');
    } else {
      this.props.loggedOut();
    }
    this.setState({ clientid: JSON.parse(localStorage.getItem('profile')).clientID })
  }

  addToLoginTable() {
    console.log('*** addToLoginTable function');
    if (userProfileLoaded) {return 'completed'}
    let localProfile = JSON.parse(localStorage.getItem('profile'))
    let loginProfileObj = {
      clientid: this.state.clientid,
      date: localProfile.created_at,
      lastname: localProfile.family_name,
      firstname: localProfile.given_name,
      picture_sm: localProfile.picture,
      imageurl: localProfile.picture,
      picture_lg: localProfile.picture_large,
      email: localProfile.email || null,
      lastLogin: localProfile.updated_at
    };
    this.props.createLoginProfile(loginProfileObj)
    .then((response) => {
      this.props.loggedIn();
      loginProfileObj.clientid = response.payload.data[0].clientid;
      this.props.createProfile(loginProfileObj)
      .then((response) => this.props.fetchRoster());
    })
    userProfileLoaded = true;
    console.log('- userProfileLoaded: ', userProfileLoaded);
  }

  updateLoginTable(id){
    console.log('*** updateLoginTable function');
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
      lastLogin: localProfile.updated_at
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
    console.log('- userProfileLoaded: ', userProfileLoaded);
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
