import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router';

const url = './../../images/T-Bird_orange.png',
      fbIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-facebook-icon.png',
      tIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-twitter-icon.png',
      fbURL = 'https://www.facebook.com/Troop-51-of-Provo-Utah-108463195857584',
      tURL = '#';

class HeaderBanner extends Component {

  render() {

    return(
      <Grid columns={3}>
        <Grid.Row centered>
          <Grid.Column centered width={2}>
            <Link to={'/home'} className='logo-home-img'>
              <Image className='img-selector' src={url} style={{width: 100}}/>
            </Link>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h1' id='site_title'>Welcome to BSA</Header><br />
            <Header as='h2'>Troop 51</Header>
            <Header as='h3'>Over 100 Years of Scouting</Header>
          </Grid.Column>
          <Grid.Column centered width={2}>
            <a href={fbURL}> <Image className='img-selector' src={fbIconUrl} style={{width: 100}} /> </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default HeaderBanner;
