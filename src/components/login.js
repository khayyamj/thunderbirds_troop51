import React, { PropTypes as T } from 'react';
// import { PropTypes as T } from 'prop-types';
import {ButtonToolbar } from 'react-bootstrap';
import { Button, Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut, getUserProfiles, createLoginProfile, updateLoginProfile } from './../actions/action_index';
import { bindActionCreators } from 'redux';

import AuthService from './../utils/AuthService';
import config from './../../config';

let login = false,
    token = false,
    stopLoop = 0,
    profile = {},
    userProfileLoaded = false;


export class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      login: false,
      profIndex: null,
      clientid: null
    };
    JSON.parse(localStorage.getItem('profile')) != null ? token = true : token = false;
    this.checkProfile = this.checkProfile.bind(this);
    // console.log('constructor profile token: ', JSON.parse(localStorage.getItem('profile')))

  }
  componentWillMount() {
    this.props.getUserProfiles()
      .then(response => {
        JSON.parse(localStorage.getItem('profile')) != null ? profile = JSON.parse(localStorage.getItem('profile'))  : profile = {};
      })
      .then(response => {
        setTimeout(() => {
          // console.log('componentWillMount Timeout function...profile token: ', profile, Object.keys(profile).length);
          if (Object.keys(profile).length === 0) {
            this.props.loggedOut();
          } else {
            this.props.loggedIn()
            console.log('loggedIn function called: componentWillMount');
            // console.log('componentWillMount client data: ', profile)
            this.setState({ clientid:profile.clientID })
          }
          return null;
        },2000)
      })
  }

  componentWillUpdate(nextProps = []) {
    stopLoop++;
    console.log('<- componentWillUpdate function -> ', stopLoop);
    setTimeout(() => { // delay action to allow system to update
      console.log('nextProps: ', nextProps);
      console.log('clientId: ', this.state.clientid);
      console.log('componentWillUpdate setTimeout function ', Object.keys(profile).length === 0, nextProps.users.length === 0, !this.state.clientid);
      this.checkProfile();
      JSON.parse(localStorage.getItem('profile')) != null ? profile = JSON.parse(localStorage.getItem('profile')) : profile = {};
      if (Object.keys(profile).length === 0 || nextProps.users.length === 0 || !this.state.clientid) {
        console.log('*** ending cycle componentWillUpdate ***');
        return null
      }
        let temp = nextProps.users.find(user => user.clientid == this.state.clientid) || profile;
        console.log('setting temp index: ', temp, this.state.profIndex, temp.loginid, "profIndex ? login ", this.state.profIndex === temp.loginid);
        if (this.state.profIndex === temp.loginid && temp.loginid || userProfileLoaded) {return null} // already updated - don't update state again;
          this.setState({ profIndex: temp.loginid})
          userProfileLoaded === false && temp && temp.loginid ? this.updateLoginTable(temp.loginid) : console.log('Profile not updated--> userProfileLoaded: ', userProfileLoaded, 'temp ', temp);
          if(userProfileLoaded === false && temp) {
            console.log("New profile to add to login table...")
            this.addToLoginTable()
            .then((response) => {
              console.log("addToLoginTable ", response);
            })
          }
          else {console.log("don't need to add to login table");}
    }, 1000);
  }

  checkProfile() {
    console.log('<-- checkProfile function -->', stopLoop);
    // stopLoop++;
    if (stopLoop > 5) {return null};
    if (JSON.parse(localStorage.getItem('profile')) === null) {
      return null;
    } else {
      this.props.loggedIn()
      console.log('loggedIn function called: checkProfile')
      if (this.state.clientid === profile.clientID) { return null } // state already updated, end function
        else { this.setState({ clientid:profile.clientID }) }
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate --> prevProps ', prevProps);
  //   console.log('componentDidUpdate --> prevState ', prevState);
  // }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.props.loggedOut();
    this.setState({ login : false }); token = false;
  }

  render() {
    const { auth } = this.props;
    // console.log('render--> token: ', token, ' login: ', this.state.login);
    token === this.state.login ? console.log('render--> login tokens match: ', token) : this.loginStatus();
    // console.log('(render) login: ', this.props.login.login);
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
      </div>
    )
  }

  loginStatus() {
    console.log('*** loginStatus function called ***');
    this.setState({ login: !login });
    console.log('<-- loginStatus token-->', JSON.parse(localStorage.getItem('profile')))
    // JSON.parse(localStorage.getItem('profile')) != null ? this.props.loggedIn() : this.props.loggedOut();
    if ( JSON.parse(localStorage.getItem('profile')) != null ) {
      this.props.loggedIn();
      console.log('loggedIn function called: loginStatus');
    } else {
      this.props.loggedOut();
    }
    this.setState({ clientid: JSON.parse(localStorage.getItem('profile')).clientID })
  }

  addToLoginTable() {
    if (userProfileLoaded) {return 'completed'}
    console.log('addToLoginTable...');
    let localProfile = JSON.parse(localStorage.getItem('profile'))
    let loginProfileObj = {
      clientid: this.state.clientid,
      date: localProfile.created_at,
      lastname: localProfile.family_name,
      firstname: localProfile.given_name,
      picture_sm: localProfile.picture,
      picture_lg: localProfile.picture_large,
      email: localProfile.email || null,
      lastLogin: localProfile.updated_at
    };
    console.log('loginProfileObj: ', loginProfileObj);
    this.props.createLoginProfile(loginProfileObj)
    userProfileLoaded = true;
    console.log('userProfileLoaded status updated')
  }

  updateLoginTable(id){
    if (userProfileLoaded) {return 'completed'}
    console.log('updateLoginTable...', id);
    let localProfile = JSON.parse(localStorage.getItem('profile'));
    console.log('updateLoginTable localProfile: ', localProfile);
    let loginProfileObj = {
      loginid: id,
      clientid: this.state.clientid,
      date: localProfile.created_at,
      lastname: localProfile.family_name,
      firstname: localProfile.given_name,
      picture_sm: localProfile.picture,
      picture_lg: localProfile.picture_large,
      email: localProfile.email || null,
      lastLogin: localProfile.updated_at
    };
    console.log('loginProfileObj: ', loginProfileObj);
    this.props.updateLoginProfile(loginProfileObj)
      userProfileLoaded = true;
      console.log('userProfileLoaded status updated')
  }

}
function mapStateToProps (state) {
  return {
    login: state.login,
    user: state.users.user,
    users: state.users.users
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ loggedIn, loggedOut, getUserProfiles, createLoginProfile, updateLoginProfile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
