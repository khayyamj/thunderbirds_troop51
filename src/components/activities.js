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
    this.state = { Activity: 'campout'}
    this.selectActivity = this.selectActivity.bind(this)
    this.onAddActivity = this.onAddActivity.bind(this)
  }
  componentWillMount() {
    this.props.fetchAllAttendedActivities().then(() => {
    });
  }

  renderList(elem, currentActivity) {
    const youth = [], adults = []
    let everyone = this.props.activities.all || []
    let scout = '', leader = ''
    return everyone.map(activity => {
      if (activity.actid === currentActivity) {
        if (elem === 'youth' && !activity.adult) {
          scout = `${activity.firstname} ${activity.lastname.charAt(0)}`;
          return (
            <li key={activity.date + activity.actid + activity.profileid + activity.firstname}>
              {scout}
            </li>)
        } else if (elem === 'adults' && activity.adult){
          leader = `${activity.firstname} ${activity.lastname.charAt(0)}`;
          return (
            <li key={activity.date + activity.actid + activity.profileid + activity.firstname}>
              {leader}
            </li>)
        }
      }
    })
  }

  selectActivity(event) {  // set activity filter
     this.setState({ Activity: event.target.value });
   }

  renderActivities() {
    const
      filter = this.state.Activity,
      oneTime = [],
      filteredActivityList = [];
    this.props.activities.all.map((activity, i) => {
      // filter list of activites by type
      if (filteredActivityList.find(act => act.actid === activity.actid )) { return filteredActivityList }
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
    return filteredActivityList.map((activity) => {
     let { lat, lng } = activity;
      return (
        <Grid key={activity.actid}>
          <Grid.Row className="activity-type-row">
            <Grid.Column>
              <h1>{activity.type.charAt(0).toUpperCase()+activity.type.slice(1)}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              Date: {activity.date} <br />
              Campsite: <span className="activity-site-name">{activity.site}</span> <br />
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

  onAddActivity() {
    console.log('Add activity selected')
    console.log('props: ', this.props)
    console.log('state: ', this.state)
  }

  render() {
    return(
      <div className="page-container">
        <div className="top-row">

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
          <div className="link-button" onClick={() => this.onAddActivity()}>
            Add Activity
          </div>
        </div>
        <div className="form-spacer"></div>
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

// TODO Add styling to page
// TODO Add functionality for button to link to Add Activity page
// TODO Adjust back endpoint to return last name first letter only for public calls
// TODO Add additional endpoint and call to get full last name for login users and admins
