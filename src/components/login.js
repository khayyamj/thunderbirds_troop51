import React, { PropTypes as T } from 'react'
import {ButtonToolbar } from 'react-bootstrap'
import { Button, Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut, getUserProfiles } from './../actions/action_index';
import { bindActionCreators } from 'redux';

import AuthService from './../utils/AuthService';
import config from './../../config';

let login = false,
    token = false;


export class Login extends React.Component {
  constructor(){
    super();

    this.state = {};
    localStorage.getItem('id_token') ? token = true : token = false;
  }
  componentWillMount() {
    this.props.getUserProfiles();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.props.loggedOut();
    login = false; token = false;
  }

  render() {
    const { auth } = this.props;
    token === login ? 'match' : this.loginStatus();
    console.log('login profile->', JSON.parse(localStorage.getItem('profile')));
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
    localStorage.getItem('id_token') ? this.props.loggedIn() : this.props.loggedOut();
    login = !login;
    // this.props.user ? token = true : this.props.setUserProfile(JSON.parse(localStorage.getItem('profile')));
    if (!this.props.user) {
      this.addToLoginTable();
    }
  }

  addToLoginTable() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const loginProfile = {
      age: profile.age_range,
      clientId: profile.clientID,
      date: profile.created_at,
      lastname: profile.family_name,
      firstname: profile.given_name,
      pic_sm: profile.picture,
      pic_lg: profile.picture_large,
      email: profile.email_verified || null
    }
    if (!this.state.user.email.indexOf(profile.email)) {
      console.log('login table under construction...')
    }
  }

}
function mapStateToProps (state) {
  return {
    login: state.login,
    user: state.users.user
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ loggedIn, loggedOut, getUserProfiles }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
