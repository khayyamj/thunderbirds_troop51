import React, { Component } from 'react';

class GoogleMap extends Component {
   componentDidMount() {
      new google.maps.Map(this.refs.map, {
         zoom: 8,
         center: {
            lat: this.props.lat,
            lng: this.props.lng
         }
      })
   }

  render() {
    return(
      <div ref="map" className="google-map"/>
    );
  }
}
export default GoogleMap;
