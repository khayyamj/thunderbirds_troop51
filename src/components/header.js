import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router';

const url = './../../images/thunderbird.png',
      fbIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-facebook-icon.png',
      tIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-twitter-icon.png',
      fbURL = 'https://www.facebook.com/Troop-51-of-Provo-Utah-108463195857584',
      tURL = '#';

class HeaderBanner extends Component {

  render() {

    return(
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Link to={'/home'}>
              <Image src={url}/>
            </Link>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h1'>Troop 51</Header><br />
            <Header as='h2'>Over 100 Years of Scouting</Header>

          </Grid.Column>
          <Grid.Column width={4}>
            <a href={fbURL}> <Image src={fbIconUrl} style={{width: 100}} /> </a>
            <a href={tURL}> <Image src={tIconUrl} style={{width: 100}} /> </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default HeaderBanner;
