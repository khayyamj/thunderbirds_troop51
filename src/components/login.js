import React, { PropTypes as T } from 'react'
import {ButtonToolbar } from 'react-bootstrap'
import { Button, Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut, getUserProfiles, createLoginProfile, updateLoginProfile } from './../actions/action_index';
import { bindActionCreators } from 'redux';

import AuthService from './../utils/AuthService';
import config from './../../config';

let login = false,
    token = false,
    stopLoop = 0,
    userProfileLoaded = false;


export class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      login: false,
      profIndex: null,
      clientid: null
    };
    localStorage.getItem('id_token') ? token = true : token = false;

  }
  componentWillMount() {
    this.props.getUserProfiles()
      .then(response => {
        console.log('componentWillMount data: ',response.payload.data);
        localStorage.getItem('id_token') ? token = true : token = false;
        token ? this.addToLoginTable() : 'do nothing';
      });
    console.log('componentWillMount token: ', token);
    if (token) {
      this.props.loggedIn()
      console.log('componentWillMount client data: ', JSON.parse(localStorage.getItem('profile')))
      this.setState({ clientid: JSON.parse(localStorage.getItem('profile')).clientID })
    } else {
      this.props.loggedOut();
    }
  }

  componentWillUpdate(nextProps = []) {

    console.log('componentWillUpdate...', nextProps);
    if (stopLoop >= 10) {return null}; // end loop, no updates;
    localStorage.getItem('id_token') ? token = true : token = false;
    if (!token || nextProps.users.length === 0 || !this.state.clientid) {
      console.log('ending cycle componentWillUpdate');
      return null
    } // no token means nothing to update;
    stopLoop++;
    console.log('nextProps.users: ', nextProps.users, 'clientid: ', this.state.clientid);
    let temp = nextProps.users.find(user => user.clientid == this.state.clientid);
    console.log('temp index: ', temp);
    if (this.state.profIndex === temp.loginid) {return null} // already updated - don't update state again;
    this.setState({ profIndex: temp.loginid})
    userProfileLoaded === false && temp ? this.updateLoginTable(temp.loginid) : console.log('userProfileLoaded: ', userProfileLoaded, 'temp ', temp);
    userProfileLoaded === false ? this.addToLoginTable() : console.log('do nothing');
     console.log(stopLoop,' - componentWillUpdate interation');
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.props.loggedOut();
    this.setState({ login : false }); token = false;
  }

  render() {
    const { auth } = this.props;
    token === this.state.login ? console.log('token match: ', token) : this.loginStatus();
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
    console.log('login--> loginStatus function');
    this.setState({ login: !login });
    localStorage.getItem('id_token') ? this.props.loggedIn() : this.props.loggedOut();
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
