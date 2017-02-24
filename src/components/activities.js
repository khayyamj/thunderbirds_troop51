import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GoogleMap from './google_map';

class Activities extends Component {
   renderList(elem) {
      return elem.map((e) => {
         return <li key={e}>{e}</li>
      })
   }

   renderActivities() {

      return this.props.activities.map((activity) => {
         const { lat, lng } = activity.location;
         console.log('lat: ', lat, ' lng: ', lng);
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
         {this.renderActivities()}
      </div>
    );
  }
}
const mapStateToProps = function({ activities }) {
   return { activities };
}
export default connect(mapStateToProps)(Activities);
