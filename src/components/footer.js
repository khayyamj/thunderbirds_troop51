import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <Header as='h4' textAlign='center' style={{color: 'white'}}>
        &copy; 2017 <Link to='/about_project'>Khayyam Jones</Link>
      </Header>
    );
  }
}
export default Footer;

// TODO style and formatting
