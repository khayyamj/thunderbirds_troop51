import React, { PropTypes as T } from 'react'
import {ButtonToolbar } from 'react-bootstrap'
import AuthService from './../utils/AuthService'
import { Button, Icon } from 'semantic-ui-react';

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div style={{textAlign: 'center'}}>
          <Button animated='fade' color='orange' onClick={auth.login.bind(this)}>
            <Button.Content hidden>Login </Button.Content>
            <Button.Content visible><Icon name='sign in' /></Button.Content>
          </Button>
      </div>
    )
  }
}

export default Login;
