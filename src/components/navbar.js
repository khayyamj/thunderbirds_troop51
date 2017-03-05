import React, { Component, PropTypes as T } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthService from './../utils/AuthService';
import { Button, Icon } from 'semantic-ui-react';

import config from './../../config';

let login = false;
const { clientId, domain } = config();
const auth = new AuthService(clientId, domain);
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    login = false;
  } else {
    login = true;
  }
}

export class NavBar extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

   renderLinks() {
      return this.props.NavLinks.map((navLink) => {
         return (
            <Link to={navLink.address} key={navLink.link}>
              <Button animated animated='fade' color='orange'>
                <Button.Content hidden>{navLink.link} </Button.Content>
                <Button.Content visible>
                  <Icon name={navLink.icon} />
                </Button.Content>
              </Button>
            </Link>
         )
      });
   }

  render() {
    const { auth } = this.props;
    requireAuth();
    console.log('NavBar login status: ', this.props.login)
    return(
      <div className="navbar">
         <ul className="navigation">
            {this.renderLinks()}

            <Link to='/login'>
              <Button animated animated='fade' color={this.props.login ? 'red' : 'green'}>
                <Button.Content hidden>{this.props.login ? 'Logout' : 'Login'} </Button.Content>
                <Button.Content visible>
                  <Icon name={this.props.login ? 'sign out' : 'sign in'} />
                </Button.Content>
              </Button>
            </Link>

         </ul>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
   return {
      NavLinks: state.navLinks,
      login: state.login.login
   }
}

export default connect(mapStateToProps)(NavBar);
