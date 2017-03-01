import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchRoster } from './../actions/action_index';
import { Link } from 'react-router';
import RosterAdmin from './../components/profile_adminView';

let profileToggleShow = false;
let profileText = 'Edit Profiles';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileText: 'Edit Profiles',
      toggleDisplay: 'none',
      displayClass: 'elemNoDisplay'
    };
    this.listProfiles = this.listProfiles.bind(this);
  }

  componentWillMount() {
    this.props.fetchRoster();
  }

  listProfiles() {
    profileToggleShow = !profileToggleShow;
    const profiles = this.props.profiles.roster;
    if (profileToggleShow === true) {
      this.setState({
        profileText: 'Hide Profiles',
        displayClass: 'elemDisplay'
      });

    } else {
      this.setState({
        profileText: 'Edit Profiles',
        displayClass: 'elemNoDisplay'
      });
    }

  }

  render() {
    const profiles = this.props.profiles.roster;
    let profileProps = {
      profiles: this.props.profiles.roster,
      displayClass: this.state.displayClass
    }
    return(
      <div>
        <div className="Admin-dashboard">
          <div className="button" onClick={this.listProfiles}> {this.state.profileText} </div>
          <div className="button"> Add Accout Transaction </div>
          <div className="button"> Add Activity </div>
        </div>
        <RosterAdmin passedProps={profileProps} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    profiles: state.profiles
  }
};
var mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchRoster }, dispatch);
}
export default connect(mapStateToProps, {fetchRoster})(Admin);
