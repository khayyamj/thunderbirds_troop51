import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GoogleMap from './google_map';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = { Activity: 'all'};

    this.selectActivity = this.selectActivity.bind(this);
  }

   renderList(elem) {
      return elem.map((e) => {
         return <li key={e}>{e}</li>
      })
   }

   selectActivity(event) {
     console.log('selectActivity event: ', event.target.value);
     this.setState({ Activity: event.target.value });
   }

   renderActivities() {
     const filteredActivityList = [],
          filter = this.state.Activity;

     this.props.activities.map((activity, i) => {
       if (filter === 'all') {
         console.log('Filter --> ' + filter);
         filteredActivityList.push(activity)
       } else
       if (activity.type === filter) {
         console.log('Filter --> ' + filter);
         filteredActivityList.push(activity)
       }
       return filteredActivityList;
     })
      return filteredActivityList.map((activity) => {
         const { lat, lng } = activity.location;
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
export default connect(mapStateToProps)(Activities);
