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
      zip: null,
      email: '',
      cellphone: '',
      homephone: '',
      birthday: '',
      handbook: false,
      orangeneckerchief: false,
      thunderbirdneckerchief: false,
      adult: false,
      active: false,
      permissions: null,
      scout: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view === false) {return null;}
    for (var prop in nextProps.scout) {
      this.setState({ [prop] : nextProps.scout[prop] })
    }
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value})
  }

  handleSubmit(event) {
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
      adult: this.state.adult,
      permissions: this.state.permissions
    }
    if (profileObj.id) {

      this.props.updateProfile(profileObj)
        .then(response => this.props.fetchRoster());
      alert(`Profile for ${profileObj.firstname} has been updated`);
    } else {
      this.props.createProfile(profileObj)
        .then(response => this.props.fetchRoster())
      alert(`Profile for ${profileObj.firstname} has been created`);
    }
    this.setState({ profileid: null });
    this.resetForm();
    this.props.reset();
    setTimeout(this.props.reloadRoster,1000);
  }

  resetForm() {
    this.props.reset();
    this.setState({
      profileid: null,
      firstname: '',
      nickname: '',
      lastname: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      email: '',
      cellphone: '',
      homephone: '',
      birthday: '',
      handbook: false,
      orangeneckerchief: false,
      thunderbirdneckerchief: false,
      adult: false,
      active: false,
      permissions: null,
      scout: {}
    });

  }

  render() {
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
          <section className="groups-of-checkboxes">
            <Form.Group className="stacked-checkboxes">
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
            </Form.Group>
            <Form.Group className="stacked-checkboxes">
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
            <section className="permissions-section-css">
            <p>Current Permissions: <br /> <span className="bold-text">{this.state.permissions != null ? this.state.permissions.charAt(0).toUpperCase()+this.state.permissions.slice(1) : 'None'}</span></p>
              <select
                name='permissions'
                label="Permissions"
                className="permissions-dropdown-menu"
                default={this.state.permissions}
                onMouseLeave={this.handleChange}>
                <option value='null'>Permissions:</option>
                <option value='guest'>Guest</option>
                <option value='member'>Member</option>
                <option value='admin'>Admin</option>
              </select>
            </section>
          </section>
          <Button type='submit' value='Submit'>Submit</Button>

        </Form>
        <Button onClick={this.resetForm}>Reset Form</Button>
      </div>
    )
  }
  handleCheckbox(event, data) {
    const key = data.name;
    const value = data.checked;
      this.setState({ [key]: value})
  }
}
const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ updateProfile, createProfile, fetchRoster }, dispatch);
}
export default connect (null, mapDispatchToProps)(UpdateProfile);
