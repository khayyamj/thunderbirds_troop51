import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfile, createProfile, fetchRoster } from './../actions/action_index.js';


class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileid: null,
      firstname: '',
      nickname: '',
      lastname: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      cellphone: '',
      homephone: '',
      birthday: '',
      handbook: false,
      orangeneckerchief: false,
      thunderbirdneckerchief: false,
      adult: false,
      active: true,
      scout: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate: ', nextProps.scout, nextState);
  //   if (this.props.scout === {}) {return false}
  //   if (nextProps.scout != this.state.scout) {
  //     return true;
  //   } else {return false;}
  // }
  componentWillReceiveProps(nextProps) {
    // console.log('Update_profile --> componentWillReceiveProps: ', nextProps.scout);
    if (nextProps.view === false) {return null;}
    console.log('Add_transaction---> nextProps: ',nextProps.scout);
    for (var prop in nextProps.scout) {
      this.setState({ [prop] : nextProps.scout[prop] })
    }
  }

  handleChange(event) {
    const value = event.target.name;
    this.setState({ [value]: event.target.value})
  }

  handleSubmit(event) {
    // console.log('handleSubmit: ', this.state);
    event.preventDefault();
    const profileObj = {
      id: this.state.profileid,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      nickname: this.state.nickname,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      cellphone: this.state.cellphone,
      homephone: this.state.homephone,
      birthday: this.state.birthday,
      handbook: this.state.handbook,
      orangeneckerchief: this.state.orangeneckerchief,
      thunderbirdneckerchief: this.state.thunderbirdneckerchief,
      active: this.state.active,
      adult: this.state.adult
    }
    // console.log('submit profileObj-->', profileObj);
    // console.log('checking profileObj ', profileObj.id);
    if (profileObj.id) {
      console.log('updating profile ', profileObj.id + " - ", profileObj.firstname, profileObj.lastname)
      this.props.updateProfile(profileObj)
        .then(response => this.props.fetchRoster());
      alert(`Profile for ${profileObj.firstname} has been updated`);
    } else {
      console.log('adding profile ', profileObj.firstname, profileObj.lastname)
      this.props.createProfile(profileObj)
        .then(response => this.props.fetchRoster())
      alert(`Profile for ${profileObj.firstname} has been created`);
    }
    this.setState({ profileid: null });
    this.resetForm();
    this.props.reset();
    setTimeout(this.props.reloadRoster,1000);
    console.log('Update_profile--> Reloading Roster function called...')
  }

  resetForm() {
    // console.log('resetForm...', this.props);
    this.props.reset();
    this.setState({
      profileid: null,
      firstname: '',
      nickname: '',
      lastname: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      cellphone: '',
      homephone: '',
      birthday: '',
      handbook: false,
      orangeneckerchief: false,
      thunderbirdneckerchief: false,
      adult: false,
      active: true,
      scout: {}
    });

  }

  render() {
    // console.log('Update_profile state (render)-->', this.state.id);
    if (!this.props.view) {
      return <div></div>
    }
    return (
      <div>
        Add / Update Profile
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>
              <input
                name='firstname'
                placeholder='First Name'
                value={this.state.firstname}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='nickname'
                placeholder='Nickname'
                value={this.state.nickname}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='lastname'
                placeholder='Last Name'
                value={this.state.lastname}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='profileid'
                placeholder='id'
                value={this.state.profileid}/>
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <label>
              <input
                width={7}
                name='address'
                placeholder='Address'
                value={this.state.address}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                width={6}
                name='city'
                placeholder='City'
                value={this.state.city}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                width={1}
                name='state'
                placeholder='State'
                value={this.state.state}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                width={2}
                name='zip'
                placeholder='Zip'
                value={this.state.zip}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>
              <input
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='cellphone'
                placeholder='Cell Phone'
                value={this.state.cellphone}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='homephone'
                placeholder='Home Phone'
                value={this.state.homephone}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='birthday'
                placeholder='Birthday'
                value={this.state.birthday}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Checkbox
              toggle
              type='checkbox'
              name='handbook'
              label='Read Handbook'
              checked={this.state.handbook}
              onChange={this.handleCheckbox}
            /><br />
            <Checkbox
              toggle
              name='orangeneckerchief'
              label='Orange Neckerchief'
              checked={this.state.orangeneckerchief}
              onChange={this.handleCheckbox}
            /><br />
            <Checkbox
              toggle
              type='checkbox'
              name='thunderbirdneckerchief'
              label='T-bird Neckerchief'
              checked={this.state.thunderbirdneckerchief}
              onChange={this.handleCheckbox}
            /><br />
            <Checkbox
              toggle
              type='checkbox'
              name='adult'
              label='Adult'
              checked={this.state.adult}
              onChange={this.handleCheckbox}
            /><br />
            <Checkbox
              toggle
              type='checkbox'
              name='active'
              label='Active'
              checked={this.state.active}
              onChange={this.handleCheckbox}
            /><br />
          </Form.Group>
          <Button type='submit' value='Submit'>Submit</Button>

        </Form>
        <Button onClick={this.resetForm}>Reset Form</Button>
      </div>
    )
  }
  handleCheckbox(event, data) {
    console.log('handleCheckbox: ', data)
    const key = data.name;
    const value = data.checked;
    console.log([key] + ' value: ', value)
      this.setState({ [key]: value})
  }
}
const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ updateProfile, createProfile, fetchRoster }, dispatch);
}
export default connect (null, mapDispatchToProps)(UpdateProfile);
