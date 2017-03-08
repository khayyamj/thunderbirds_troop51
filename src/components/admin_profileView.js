// needs object with roster profiles and display class

import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

class RosterAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderRoster() {
    return (
      this.props.passedProps.profiles.map((profile) => {
        return (
          <Grid.Row key={profile.profileid}>
            <Grid.Column width={1}>
              <Button color='orange' size='mini'>Edit</Button>
            </Grid.Column>
            <Grid.Column width={2}>
              {profile.firstname}
            </Grid.Column>
            <Grid.Column width={2}>
              {profile.lastname}
            </Grid.Column>
          </Grid.Row>
        )
      })
    )
  }
  render() {
    return(
      <div className={this.props.passedProps.displayProfClass}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              Roster:
            </Grid.Column>
          </Grid.Row>
        {this.renderRoster()}
        </Grid>
      </div>
    );
  }
}
export default RosterAdmin;
