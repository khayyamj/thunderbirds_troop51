import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <Header as='h4' textAlign='center' style={{color: 'white'}}>
        &copy; 2017 Khayyam Jones
      </Header>
    );
  }
}
export default Footer;
