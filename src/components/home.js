import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router';
import pageImage from './../../images/atTroop51.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <Header as='h1' textAlign='center'>
          Troop 51 - <span className='subtitle'>Established 1916</span>
        </Header>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Header as='h3'>
                Scout Oath
              </Header>
              <Header as='h4'>
                On my honor I will do my best
                To do my duty to God and my country
                And to obey the Scout Law,
                To Help Other people at all times;
                To keep myself physically strong,
                mentally awake, and morally straight.
              </Header>
            </Grid.Column>
            <Grid.Column>
            <Header as='h3'>
              Scout Law
            </Header>
            <Header as='h4'>
              A scout is trustworthy, loyal, helpful,
              friendly, courteous, kind, obedient,
              cheerful, thrifty, brave, clean, and
              reverent.
            </Header>
            </Grid.Column>
            <Grid.Column>
            <Header as='h3'>
              Join Troop 51
            </Header>
            <Header as='h4'>
              Meetings every Thursday <br />
              7:00 - 8:30 p.m. <br />
              Elk's Lodge <br />
              1000 S. University Ave. <br />
              Provo, UT
            </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16} centered>
              <Image
                src={pageImage}
                as='a' size='large'
                centered
                href='https://www.facebook.com/Troop-51-of-Provo-Utah-108463195857584/'
                shape='rounded'
                />
              </Grid.Column>
          </Grid.Row>
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
            <Grid.Column width={5}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    );
  }
}
export default Home;

// TODO formatting / styling for page
// TODO optimize content
