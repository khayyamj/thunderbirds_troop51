import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class Campouts extends Component {
   renderList(elem) {
      return elem.map((e) => {
         return <li key={e}>{e}</li>
      })
   }

   renderCampSites() {
      return this.props.campouts.map((campout) => {
         return (
            <div className="campout" key={campout.date}>
               Date: {campout.date} <br />
               Campsite: {campout.site} <br />
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
