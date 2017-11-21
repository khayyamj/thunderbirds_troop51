import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { createActivity, linkParticipantstoActivity } from '../actions';
import { Button, Form } from 'semantic-ui-react';

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
  pObj={};
let initialized = false;

class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.renderRoster = this.renderRoster.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this._submitActivity = this._submitActivity.bind(this);
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
      <div key={fieldConfig.label}> <br />
         <label>{fieldConfig.label}</label>
         <input type={fieldConfig.type} className='form-input' {...fieldHelper} />
         {fieldHelper.touched ? fieldHelper.error : ''}
      </div>
    )
  }
  _onSelect(event) {
    console.log('pObj start -->', pObj);
    let going = pObj[event.target.value];
    pObj[event.target.value] = !going;
    console.log('pObj', pObj);
  }

  renderRoster() {
    const {profiles} = this.props.profProps
    return (
      profiles.map((profile) => {
        if (profile.active) {
          return (
            <div key={profile.profileid}> <br />
              {this.toggleButton(profile)}
              {profile.firstname} {profile.lastname}
            </div>
          )
        }
      })
    )
  }

  toggleButton(going) {
    if (!going) {
      return <div></div>
    }
    if (!initialized) {
      initialized = !initialized
      pObj[going.profileid] = false;
    }
    return (
        <Button
          className=''
          value={going.profileid}
          onClick={this._onSelect}
          style={{cursor: 'pointer'}}>
          {pObj[going.profileid] ? 'Remove' : 'Attended'}
        </Button>
      )
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div className={this.props.actProps.displayActClass}>
         <Form
            className="contact-form"
            onSubmit={handleSubmit(this._submitActivity)}> <br />
            <h3>New Activity</h3>
            {_.map(FIELDS, this.renderField.bind(this))}
            {this.renderRoster()} <br />
            <Button
              type='submit'
              className='nav-btn'>
              Submit
            </Button>
         </Form>
      </div>
    );
  }

  hasSubmitSucceded(CreateActivity) {
    console.log("Succeeded")
  }

  _submitActivity(data) {
    return this.props.createActivity(data).then((response) => {
      console.log('Activity submittted: ', response)
      for (let participant in pObj) {
        console.log("participant: ",participant, pObj[participant]);
        if (pObj[participant]) {
          let actid = response.payload.data.actid;
          let profileid = parseInt(participant);
          let ptaObj = [ actid, profileid ];
          this.props.linkParticipantstoActivity(ptaObj)
          .then(() => { console.log('Link added')})
        }
      }
    })
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
}, null, { createActivity, linkParticipantstoActivity })(CreateActivity);

// TODO verify component is being used
