import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class ResourceLinks extends Component {
  render () {
    return (
      <Grid className="Resource-Links">
        <Grid.Row>
          <Grid.Column width={4}> </Grid.Column>
          <Grid.Column width={4} centered>
            <Header as='h3'>
            Site Links
            </Header>
            <Header as='h4'>
              <Link to={'/Posts'}> Meeting Notes </Link> <br />
              <Link to={'/activities'}> Recent Activities </Link> <br />
              <Link to={'/calendar'}> Calendar </Link> <br />
              <Link to={'/roster'}> Roster </Link> <br />
              <Link to={'/about'}> About Troop 51 </Link> <br />
              <Link to={'/contact'}> Contact Us </Link>
            </Header>
          </Grid.Column>
          <Grid.Column width={8} centered>
            <Header as='h3'>
            Resources
            </Header>
            <Header as='h4'>
              <a href="http://www.utahscouts.org/" target="_blank">Council Website</a> <br />
              <a href="http://www.utahscouts.org/OpenRosters/View_Homepage.aspx?orgkey=1196" target="_blank">District Website</a> <br />
              <a href="https://www.scoutbook.com/mobile/" target="_blank">Scoutbook</a> <br />
              <a href="http://meritbadge.org/wiki/index.php/Merit_Badge_Worksheets" target="_blank">Merit Badge Worksheets</a> <br />
              <a href="http://www.scouting.org/filestore/HealthSafety/pdf/680-001_ABC.pdf" target="_blank">BSA Health Form</a>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
