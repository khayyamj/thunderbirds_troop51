import React, { PropTypes as T } from 'react'
import {ButtonToolbar } from 'react-bootstrap'
import { Button, Icon, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loggedIn, loggedOut } from './../actions/action_index';
import { bindActionCreators } from 'redux';

import AuthService from './../utils/AuthService';
import config from './../../config';

let login = false;
const { clientId, domain } = config();
const auth = new AuthService(clientId, domain);
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    // this.props.loggedOut()
    login = false;
  } else {
    // this.props.loggedIn()
    login = true;
  }
}



export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  changeStatus() {
    // login  this.props.loggedIn() : this.props.loggedOut();
    console.log('checkLogin function')
    login ? this.props.loggedIn() : this.props.loggedOut();
  }

  logout() {
    this.props.auth.logout();
    this.setState({ logout: true, login: false })
    console.log('User logged out');
  }

  render() {
    const { auth } = this.props
    requireAuth()
    console.log('*** ', login, ' & ',this.props.login.login,' ***')
    login != this.props.login.login ? this.changeStatus() : 'continue';
    return (
      <div style={{textAlign: 'center'}}>
        <Header centered>
          {login ? "Thank you for visiting our page. Please remember to logout when you're done." : "Please log in to view additional troop information"}
        </Header>
          <Button
            animated='fade'
            color='orange'
            onClick={auth.login.bind(this)}
            style={{ display: login ? "none": "inline-block"}}>
            <Button.Content visible>Login </Button.Content>
            <Button.Content hidden><Icon name='sign in' /></Button.Content>
          </Button>
          <Button
            animated='fade'
            color='orange'
            onClick={this.logout.bind(this)}
            style={{ display: login ? "inline-block" : "none"}}>
            <Button.Content visible>Logout </Button.Content>
            <Button.Content hidden><Icon name='sign out' /></Button.Content>
          </Button>
      </div>
    )
  }
}
function mapStateToProps ({login}) {
  return { login }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ loggedIn, loggedOut }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
