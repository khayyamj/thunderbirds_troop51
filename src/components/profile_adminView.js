// needs object with roster profiles and display class

import React, { Component } from 'react';

class RosterAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderRoster() {
    return (
      this.props.passedProps.profiles.map((profile) => {
        return (
          <div key={profile.profileid}>
            {profile.firstname} {profile.lastname}
          </div>
        )
      })
    )
  }
  render() {
    return(
      <div className={this.props.passedProps.displayClass}>
        Roster:
        {this.renderRoster()}
      </div>
    );
  }
}
export default RosterAdmin;
