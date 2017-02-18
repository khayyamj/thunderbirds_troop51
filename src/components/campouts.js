import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GoogleMap from './google_map'

class Campouts extends Component {
   renderList(elem) {
      return elem.map((e) => {
         return <li key={e}>{e}</li>
      })
   }

   renderCampSites() {

      return this.props.campouts.map((campout) => {
         const { lat, lng } = campout.location;
         console.log('lat: ', lat, ' lng: ', lng);
         return (
            <div className="campout" key={campout.date}>
               Date: {campout.date} <br />
               Campsite: {campout.site} <GoogleMap lng={lng} lat={lat} /> <br />
               Notes: {campout.notes} <br />
               Scouts Attending:
                  <ul className="participants">
                  {this.renderList(campout.scouts)} </ul><br />
               Adults Attending:
                  <ul className="participants">
                  {this.renderList(campout.leaders)} </ul><hr />
            </div>
         )
      })
   }

  render() {
    return(
      <div className="campsite-list">
         {this.renderCampSites()}
      </div>
    );
  }
}
const mapStateToProps = function({ campouts }) {
   return { campouts };
}
export default connect(mapStateToProps)(Campouts);
