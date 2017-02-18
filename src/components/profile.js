import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Profile extends Component {
  render() {
    const { handleSubmit, fields: {
      firstName, lastName, nickName, email, address, city, state, zip, cellPhone, homePhone, birthday
      } } = this.props;
      console.log(firstName);

    return(
      <form className="profile-form" onSubmit={handleSubmit}>
      <h3>Profile Page</h3>
         <div className="form-group">
            <label>First Name</label><input type="text" className="form-input" {...firstName} />
         </div>
         <div className="form-group">
            <label>Last Name</label><input type="text" className="form-input" {...lastName} />
         </div>
         <div className="form-group">
            <label>Preferred Name</label><input type="text" className="form-input" {...nickName} />
         </div>
         <div className="form-group">
            <label>Email</label><input type="email" className="form-input" {...email} />
         </div>
         <div className="form-group">
            <label>Address</label><input type="text" className="form-input" {...address} />
         </div>
         <div className="form-group">
            <label>City</label><input type="text" className="form-input" {...city} />
         </div>
         <div className="form-group">
            <label>State</label><input type="text" className="form-input" {...state} />
         </div>
         <div className="form-group">
            <label>Zip</label><input type="number" className="form-input" {...zip} />
         </div>
         <div className="form-group">
            <label>Cell Phone</label><input type="tel" className="form-input" {...cellPhone} />
         </div>
         <div className="form-group">
            <label>Home Phone</label><input type="tel" className="form-input" {...homePhone} />
         </div>
         <div className="form-group">
            <label>Birthday</label><input type="date" className="form-input" {...birthday} />
         </div>
         <button type="submit" className="nav-btn">Update</button>
      </form>
    );
  }
}
export default reduxForm({
   /* config for reduxForm here */
   form: 'ProfileForm',
   fields: ['firstName', 'lastName', 'nickName', 'email', 'address', 'city', 'state', 'zip', 'cellPhone', 'homePhone', 'birthday']

})(Profile);
