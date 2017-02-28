// needs image, name, email and phone for profile
// import as <PicNameHeader profile={profile object} />

import React, { Component } from 'react';


export default class PicNameHeader extends Component {


  render() {
    console.log('pic_name info passed in: ', this.props.profile)
    const { firstname, lastname, email, homephone, imageurl } = this.props.profile;
    return(
      <div className="profile-header">
        <div className="">
          <img src="./../images/blank_profile.jpg" className="profile-img"/>
        </div>
        <div className="profile-name">
          <span className="name"> {firstname} {lastname} </span> <br />
          <span> {email} </span> <br />
          <span> {homephone} </span>
        </div>
      </div>
    );
  }
}
