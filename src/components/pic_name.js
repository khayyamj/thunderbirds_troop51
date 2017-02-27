import React, { Component } from 'react';


export default class PicNameHeader extends Component {


  render() {
    return(
      <div className="profile-header">
        <div className="">
          <img src="./../images/blank_profile.jpg" className="profile-img"/>
        </div>
        <div className="profile-name">
          <span className="name"> Skippy Scout </span> <br />
          <span> skippyscout@gmail.com </span> <br />
          <span> (801) 000-1234 </span>
        </div>
      </div>
    );
  }
}
