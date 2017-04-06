import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GoogleMap from './google_map';
import { Grid, Image, Dropdown} from 'semantic-ui-react';
import { fetchAllAttendedActivities, fetchAllParticipants } from './../actions/action_index';

const
  oneTime = [],
  filteredActivityList = [];

class Activities extends Component {

  constructor(props) {
    super(props);
    this.state = { Activity: 'all'};
    console.log('activities--> constructor Activity filter: ', this.state.Activity)
    this.selectActivity = this.selectActivity.bind(this);
  }
  componentWillMount() {
    this.props.fetchAllAttendedActivities().then((response) => {
      console.log('fetchAllAttendedActivities response: ', response.payload.data);
    });
  }

  renderList(elem, currentActivity) {
    const youth = [], adults = [];
    let scout = '', leader = '';

    return filteredActivityList.map((activity) => {
      if (activity.actid === currentActivity) {
        if (elem === 'youth' && !activity.adult) {
          scout = `${activity.firstname} ${activity.lastname}`;
          return (
            <li key={activity.actid + activity.profileid + activity.firstname}>
              {scout}
            </li>)
        } else if (elem === 'adults' && activity.adult){
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
    // console.log('activities--> selectActivity:', event.target.value);
     this.setState({ Activity: event.target.value });
   }

  renderActivities() {
    const
      filter = this.state.Activity,
      oneTime = [],
      filteredActivityList = [];
    // console.log('activites--> renderActivities filter: ', filter);
    // console.log('activites--> renderActivities activities: ', this.props.activities);
    this.props.activities.all.map((activity, i) => {
      // console.log('activites--> renderActivities oneTime.indexOf(activity.actid): ', oneTime.indexOf(activity.actid), activity.type)
      if (oneTime.indexOf(activity.actid) > 0){ //check if an activity was only done once
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
    // console.log('activities--> filteredActivityList: ', filteredActivityList);
    return filteredActivityList.map((activity) => {
     let { lat, lng } = activity;
      return (
        <Grid key={activity.actid}>
          <Grid.Row>
            <Grid.Column>
              <h1>{activity.type}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              Date: {activity.date} <br />
              Campsite: {activity.site} <br />
              Notes: {activity.notes} <br />
            </Grid.Column>
            <Grid.Column>
              Scouts Attending:
                <ul className="participants">
                  {this.renderList('youth', activity.actid)}
                </ul><br />
            </Grid.Column>
            <Grid.Column>
             Adults Attending:
              <ul className="participants">
                {this.renderList('adults', activity.actid)}
              </ul>
            </Grid.Column>
            <Grid.Column>
              <GoogleMap lng={Number(lng)} lat={Number(lat)} zoom={8} /> <br />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <hr />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
   })
  }

  render() {
    // console.log('this.props.activities', this.props.activities)
    return(
      <div className="activity-list">
        <form
          id='select-activity'
          value={this.state.Activity}
          onChange={this.selectActivity} >
          <select name='activity-type'>
                <option value='all'> All Activities </option>
                <option value='campout'> Campouts </option>
                <option value='activity'> Activities </option>
                <option value='service'> Service Projects </option>
                <option value='summer_camp'> Summer Camp </option>
          </select>
        </form>
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
