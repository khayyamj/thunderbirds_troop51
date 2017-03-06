import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';

class AboutProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <Header as='h1'>
          This project used the following:
        </Header>
        <List bulleted>
          <List.Item>Programmed in React </List.Item>
          <List.Item>ES6 </List.Item>
          <List.Item>Webpack compiling </List.Item>
          <List.Item>Gulp compiling </List.Item>
          <List.Item>Endpoint Testing </List.Item>
          <List.Item>Google Maps API </List.Item>
          <List.Item>Mobile Responsive </List.Item>
          <List.Item> Also used:
            <List.list>
              <List.Item>Registered Domain </List.Item>
              <List.Item>Authentication with Auth0 </List.Item>
              <List.Item>Semantic UI for React </List.Item>
            </List.list>
          </List.Item>
        </List>
      </div>
    );
  }
}
export default AboutProject;
