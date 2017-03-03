import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GoogleMap from './google_map';
import { fetchAllAttendedActivities, fetchAllParticipants } from './../actions/action_index';

const
  oneTime = [],
  filteredActivityList = [];

class Activities extends Component {

  constructor(props) {
    super(props);
    this.state = { Activity: 'all'};

    this.selectActivity = this.selectActivity.bind(this);
  }
  componentWillMount() {
    this.props.fetchAllAttendedActivities().then((response) => {
      console.log('fetchAllAttendedActivities: ',response);
    });
    // this.props.fetchAllParticipants();
  }

  renderList(elem, currentActivity) {
    const youth = [], adults = [];
    let scout = '', leader = '';


    return filteredActivityList.map((activity) => {
      if (activity.actid === currentActivity) {
        if (elem === 'youth' && activity.firstname) {
          scout = `${activity.firstname} ${activity.lastname}`;
          return (
            <li key={activity.actid + activity.profileid + activity.firstname}>
              {scout}
            </li>)
        } else if (elem === 'adults' && activity.firstname){
          leader = `${activity.firstname} ${activity.lastname}`;
          return (
            <li key={activity.actid + activity.profileid + activity.firstname}>
              {leader}
            </li>)
        }
      }
    })
  }

  selectActivity(event) {
     this.setState({ Activity: event.target.value });
   }

  renderActivities() {
    const filter = this.state.Activity;
    this.props.activities.all.map((activity, i) => {
      if (oneTime.indexOf(activity.actid) > 0){
        return filteredActivityList;
      }
      if (filter === 'all') {
       filteredActivityList.push(activity)
      } else
      if (activity.type === filter) {
       filteredActivityList.push(activity)
      }
      oneTime.push(activity);
      return filteredActivityList;
    })
    return filteredActivityList.map((activity) => {
     let { lat, lng } = activity;
     console.log(lat, Number(lng), '<-- lat, lng');
      return (
        <div className="activity" key={activity.date}>
           Date: {activity.date} <br />
           Campsite: {activity.site} <GoogleMap lng={Number(lng)} lat={Number(lat)} zoom={8} /> <br />
           Notes: {activity.notes} <br />
           Scouts Attending:
              <ul className="participants">
              {this.renderList('youth', activity.actid)} </ul><br />
           Adults Attending:
              <ul className="participants">
              {this.renderList('adults', activity.actid)} </ul><hr />
        </div>
      )
   })
  }

  render() {
    return(
      <div className="activity-list">

        <select
          name='Activity'
          value={this.state.Activity}
          onChange={this.selectActivity} >

          <option value='all'>All Activities</option>
          <option value='campout'>Campouts</option>
          <option value='activity'>Activities</option>
          <option value='service'>Service Projects</option>
          <option value='summer_camp'>Summer Camp</option>

        </select>

        {this.renderActivities()}

      </div>
    );
  }
}

const mapStateToProps = function({ activities }) {
   return { activities };
}
const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ fetchAllAttendedActivities, fetchAllParticipants }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Activities);
