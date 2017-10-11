import React, { Component } from 'react';
import { Header, List, Container } from 'semantic-ui-react';

export default class AboutProject extends Component {
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
          <List.List>
            <List.Item>Registered Domain </List.Item>
            <List.Item>Authentication with Auth0 </List.Item>
            <List.Item>Semantic UI for React </List.Item>
          </List.List>
          </List.Item>
        </List>
        <Header as='h1'>
          Thank you to DevMountain!
        </Header>
        <Header as='h3'>
          <br /><br />
          DM-18 Mentors:
        </Header>
          <List>
            <List.Item>Joe Blank</List.Item>
            <List.Item>Stephen Brinkworth</List.Item>
            <List.Item>Matt French</List.Item>
          </List>

      </div>
    );
  }
}
<List.List>
  <List.Item>Registered Domain </List.Item>
  <List.Item>Authentication with Auth0 </List.Item>
  <List.Item>Semantic UI for React </List.Item>
</List.List>

// TODO add styling/formatting to page
// TODO add pictures to make more interesting
// TODO include link to portfolio and resume
