import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { createActivity } from './../actions/action_index';

const FIELDS = {
  type: {
    type: 'text',
    label: 'Activity Type',
  },
  date: {
    type: 'date',
    label: 'Date',
  },
  site: {
    type: 'text',
    label: 'Site',
  },
  lat: {
    type: 'text',
    label: 'Latitude',
  },
  lng: {
    type: 'text',
    label: 'Longitude',
  },
  notes: {
    type: 'textarea',
    label: 'Activity Notes',
  }
},
  participantsArray=[];

class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendance: 'Attended',
      };
    this.renderRoster = this.renderRoster.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
      <div key={fieldConfig.label}>
         <label>{fieldConfig.label}</label>
         <input type={fieldConfig.type} className='form-input' {...fieldHelper} />
         {fieldHelper.touched ? fieldHelper.error : ''}
      </div>
    )
  }
  _onSelect(event) {
    selected = !selected;
    console.log('event: ', event.target.value);
    this.setState({ attendance: 'Remove'});
    participantsArray.push(parseInt(event.target.value))
    console.log('participantsArray:',participantsArray)
  }
  renderRoster() {
    const {profiles} = this.props.profProps
    console.log('renderRoster Profiles: ', profiles)
    return (
      profiles.map((profile) => {
        profile.selected = false;
        if (profile.active) {
          return (
            <div key={profile.profileid}>
              <button
                className=''
                value={profile.profileid}
                onClick={this._onSelect()}
                style={{cursor: 'pointer'}}>
                {this.state.attendance}
              </button>
              {profile.firstname} {profile.lastname}
            </div>
          )
        }
      })
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div>
         <form
            className="contact-form"
            onSubmit={handleSubmit(this.props.createActivity)}>
            <h3>New Activity</h3>
            {_.map(FIELDS, this.renderField.bind(this))}
            {this.renderRoster()}
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
   form: 'CreateActivity',
   fields: _.keys(FIELDS),
   validate
}, null, { createActivity })(CreateActivity);
