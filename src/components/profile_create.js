import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createProfile } from './../actions/action_index';

class Profile extends Component {
  render() {
    const { fields: { firstname, lastname, nickname, email, address, city, state, zip, cellphone, homephone, birthday }, handleSubmit } = this.props;

    return(
      <form className="profile-form" onSubmit={handleSubmit(this.props.createProfile)}>
      <h3>Profile Page</h3>
         <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-input" {...firstname} />
         </div>
         <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-input" {...lastname} />
         </div>
         <div className="form-group">
            <label>Preferred Name</label>
            <input type="text" className="form-input" {...nickname} />
         </div>
         <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-input" {...email} />
         </div>
         <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-input" {...address} />
         </div>
         <div className="form-group">
            <label>City</label>
            <input type="text" className="form-input" {...city} />
         </div>
         <div className="form-group">
            <label>State</label>
            <input type="text" className="form-input" {...state} />
         </div>
         <div className="form-group">
            <label>Zip</label>
            <input type="number" className="form-input" {...zip} />
         </div>
         <div className="form-group">
            <label>Cell Phone</label>
            <input type="tel" className="form-input" {...cellphone} />
         </div>
         <div className="form-group">
            <label>Home Phone</label>
            <input type="tel" className="form-input" {...homephone} />
         </div>
         <div className="form-group">
            <label>Birthday</label>
            <input type="date" className="form-input" {...birthday} />
         </div>
         <button type="submit" className="nav-btn">Update</button>
      </form>
    );
  }
}
export default reduxForm({
   /* config for reduxForm here */
   form: 'ProfileForm',
   fields: ['firstname', 'lastname', 'nickname', 'email', 'address', 'city', 'state', 'zip', 'cellphone', 'homephone', 'birthday']
   /* then add mapStateToProps and add dispatchToProps properties */
}, null, { createProfile })(Profile);
