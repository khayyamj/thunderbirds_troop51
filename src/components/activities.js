import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GoogleMap from './google_map';
import { fetchAllActivities } from './../actions/action_index';

class Activities extends Component {

  constructor(props) {
    super(props);
    this.state = { Activity: 'all'};

    this.selectActivity = this.selectActivity.bind(this);
  }
  componentWillMount() {
    this.props.fetchAllActivities();
  }

  renderList(elem) {
      return elem.map((e) => {
         return <li key={e}>{e}</li>
      })
   }

  selectActivity(event) {
     this.setState({ Activity: event.target.value });
   }

  renderActivities() {
    const filteredActivityList = [],
          filter = this.state.Activity;
          console.log('this.props.activities.all: ', this.props.activities.all);
    this.props.activities.all.map((activity, i) => {
       if (filter === 'all') {
         filteredActivityList.push(activity)
       } else
       if (activity.type === filter) {
         filteredActivityList.push(activity)
       }
       return filteredActivityList;
     })

    return filteredActivityList.map((activity) => {
         let { lat, lng } = activity.location;
         lat = parseInt(lat)
         lng = parseInt(lng)
         console.log(lat, lng, '<-- lat, lng');
         return (
            <div className="activity" key={activity.date}>
               Date: {activity.date} <br />
               Campsite: {activity.site} <GoogleMap lng={lng} lat={lat} /> <br />
               Notes: {activity.notes} <br />
               Scouts Attending:
                  <ul className="participants">
                  {this.renderList(activity.scouts)} </ul><br />
               Adults Attending:
                  <ul className="participants">
                  {this.renderList(activity.leaders)} </ul><hr />
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
  return bindActionCreators({ fetchAllActivities }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Activities);
