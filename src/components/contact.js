import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitMessage } from './../actions/action_index';
import { Form, Button} from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import GoggleMaps from './google_map';

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
         <Form
            className="contact-form"
            onSubmit={handleSubmit(this.props.submitMessage)}>
            <h3>Contact Us</h3>
            {_.map(FIELDS, this.renderField.bind(this))} <br />
            <Button type='submit' color='orange'>Submit</Button>
         </Form>
         <br />
         <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <p> Scoutmaster: </p>
              <p> Kevin Keaton <br />
                Phone: (801) 687-2725 <br />
                Email: <a href="mailto:keatonkevin@hotmail.com"> KeatonKevin@hotmail.com </a> </p>
            </Grid.Column>
            <Grid.Column>
              <p> Troop Meets: </p>
              <p> Thursdays, 7:00 - 8:00 p.m. <br/>
                Provo Elk's Lodge <br />
                1000 S. University Ave. <br />
                Provo, UT 84601</p>
            </Grid.Column>
            <Grid.Column>
              <GoggleMaps lat={40.220291} lng={-111.660466} zoom={12}/>
            </Grid.Column>
          </Grid.Row>
         </Grid>
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
