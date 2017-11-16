import React, { Component, PropTypes as T } from 'react';
// import { PropTypes as T } from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthService from './../utils/AuthService';
import { Button, Icon } from 'semantic-ui-react';

export class NavBar extends Component {
  static propTypes = {
    // location: T.object,
    auth: T.instanceOf(AuthService),
    profile: T.object
  }

  componentWillMount() {
    if (JSON.parse(localStorage.getItem('profile'))) {
      // console.log('profile:', JSON.parse(localStorage.getItem('profile')))
    }
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
    const { profile } = this.props;
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
      login: state.login.login,
      user: state.profiles.user,
      roster: state.profiles.roster
   }
}

export default connect(mapStateToProps)(NavBar);
