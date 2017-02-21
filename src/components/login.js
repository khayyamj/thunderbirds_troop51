import React, { Component, PropTypes as T } from 'react';

export class Login extends Component {

   render() {
     console.log('login.js this.props: ', this.props);

    return (
      <div className="login">
       Login Screen
      </div>
    )
  }
}

export default Login;
