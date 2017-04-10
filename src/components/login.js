import React, { PropTypes as T } from 'react'
import {ButtonToolbar } from 'react-bootstrap'
import { Button, Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut, getUserProfiles, createLoginProfile, updateLoginProfile } from './../actions/action_index';
import { bindActionCreators } from 'redux';

import AuthService from './../utils/AuthService';
import config from './../../config';

let login = false,
    token = false;


export class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      login: false,
      userProfileLoaded: false
    };
    localStorage.getItem('id_token') ? token = true : token = false;
    // this.addToLoginTable = this.addToLoginTable.bind(this);
  }
  componentDidMount() {
    this.props.getUserProfiles()
      .then(response => {
        console.log('componentDidMount data: ',response.payload);
        localStorage.getItem('id_token') ? token = true : token = false;
        token ? this.addToLoginTable() : 'do nothing';
      });

  }

  componentWillUpdate(nextProps = []) {
    console.log('componentWillUpdate...', nextProps);
    token === true && this.state.userProfileLoaded === false ? this.addToLoginTable() : 'do nothing';
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.props.loggedOut();
    this.setState({ login : false }); token = false;
  }

  render() {
    const { auth } = this.props;
    console.log('render token: ', token, 'login: ', this.state.login, 'match: ', token === this.state.login);
    token === this.state.login ? 'match' : this.loginStatus();

    console.log('login profile (render)->', JSON.parse(localStorage.getItem('profile')));
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

    // this.props.user ? token = true : this.props.setUserProfile(JSON.parse(localStorage.getItem('profile')));
    // console.log('loginStatus check: ', userProfilesLoaded, localStorage.getItem('id_token'))
    // if (userProfilesLoaded && localStorage.getItem('id_token')) {
    //   console.log('addToLoginTable function');
    //   this.addToLoginTable();
    // }
  }

  addToLoginTable() {
    const localProfile = JSON.parse(localStorage.getItem('profile')),
      profileIndex = this.props.users.indexOf(localProfile.clientID);
    console.log('users: ', this.props.users);
    console.log('indexOf: ', profileIndex);
    let loginProfileObj = {
      age: localProfile.age_range.min,
      clientid: localProfile.clientID,
      date: localProfile.created_at,
      lastname: localProfile.family_name,
      firstname: localProfile.given_name,
      picture_sm: localProfile.picture,
      picture_lg: localProfile.picture_large,
      email: localProfile.email || null,
      lastLogin: localProfile.updated_at
    };
    let index = this.props.users.users.indexOf(loginProfileObj.clientid)
    console.log('ClientId index: ', index);
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
