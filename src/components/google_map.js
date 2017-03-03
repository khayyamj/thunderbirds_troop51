import React, { Component } from 'react';

class GoogleMap extends Component {
   componentDidMount() {
      const map = new google.maps.Map(this.refs.map, {
         zoom: this.props.zoom,
         center: {
            lat: this.props.lat,
            lng: this.props.lng
         }
      });
      const marker = new google.maps.Marker({
         position: new google.maps.LatLng(this.props.lat,this.props.lng),
         map: map
      });
   }

  render() {
    return(
      <div ref="map" className="google-map"/>
    );
  }
}
export default GoogleMap;
