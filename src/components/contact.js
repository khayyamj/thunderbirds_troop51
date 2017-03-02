import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitMessage } from './../actions/action_index';

const FIELDS = {
  name: {
    type: 'input',
    label: 'Name'
  },
  email: {
    type: 'input',
    label: 'Email'
  },
  phone: {
    type: 'input',
    label: 'Phone'
  },
  message: {
    type: 'textarea',
    label: 'Message'
  }
};



class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div key={fieldConfig.label}>
         <label>{fieldConfig.label}</label>
         <fieldConfig.type type='text' className='form-input' {...fieldHelper} />
         {fieldHelper.touched ? fieldHelper.error : ''}
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div>
         <form
            className="contact-form"
            onSubmit={handleSubmit(this.props.submitMessage)}>
            <h3>Contact Us</h3>
            {_.map(FIELDS, this.renderField.bind(this))}
            <button type='submit' className='nav-btn'>Submit</button>
         </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  })

  return errors;
}

export default reduxForm({
   form: 'contactUsMessage',
   fields: _.keys(FIELDS),
   validate
}, null, { submitMessage })(ContactUs);
