import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitMessage } from './../actions/action_index';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const url = 'http://www.clker.com/cliparts/l/0/9/z/8/c/contact-us-hi.png',
         {fields: {name, email, phone, message}, handleSubmit } = this.props;
    return(
      <div>
         <img src={url} style={{height: 250}}/> <hr />

         <form className="contact-form" onSubmit={handleSubmit(this.props.submitMessage)}>
            <h3>Contact Us</h3>
               <div>
               <label>Name</label>
               <input type='text' className='form-input' {...name} />
               </div>
               <div>
                  <label>Email</label>
                  <input type='text' className='form-input' {...email} />
               </div>
               <div>
                  <label>Phone</label>
                  <input type='text' className='form-input' {...phone} />
               </div>
               <div>
                  <label>Message</label>
                  <input type='textarea' className='form-input' {...message} />
               </div>
               <button type='submit' className='nav-btn'>Submit</button>
         </form>
      </div>
    );
  }
}
export default reduxForm({
   form: 'contactUsMessage',
   fields: ['name','email','phone','message']
}, null, { submitMessage })(ContactUs);
