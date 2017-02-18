import React, { Component } from 'react';
class Profile extends Component {

  render() {
    return(
      <form className="profile-form">
      <h3>Profile Page</h3>
         <div>
            <label>Name</label>
         </div>
         <div>
            <label>Address</label>
         </div>
         <div>
            <label>City</label>
         </div>
         <div>
            <label>State</label>
         </div>
         <div>
            <label>Zip</label>
         </div>
         <div>
            <label>Cell Phone</label>
         </div>
         <div>
            <label>Home Phone</label>
         </div>
         <div>
            <label>Birth Date</label>
         </div>
      </form>
    );
  }
}
export default Profile;
