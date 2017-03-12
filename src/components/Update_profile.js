import React, { Component } from 'React';
import { Form, Button, Checkbox } from 'semantic-ui-react';

export default class AddActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      active: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name,event.target.value)
    const value = event.target.name;
    this.setState({ [value]: event.target.value})
  }

  handleSubmit(event) {
    console.log('handleSubmit: ', this.state);
    event.preventDefault();
  }
  render() {
    console.log('render-->', this.props);
    if (!this.props.view) {
      return <div></div>
    }
    return (
      <div>
        Update Profile
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
          <Form.Group>
            <Checkbox
              toggle
              name='handbook'
              label='Read Handbook'
              value={this.state.handbook}
              onChange={this.handleCheckbox}
            />
            <Checkbox
              toggle
              name='orangeneckerchief'
              label='Orange Neckerchief'
              value={this.state.orangeneckerchief}
              onChange={this.handleCheckbox}
            />
            <Checkbox
              toggle
              name='thunderbirdneckerchief'
              label='T-bird Neckerchief'
              value={this.state.thunderbirdneckerchief}
              onChange={this.handleCheckbox}
            />
            <Checkbox
              toggle
              name='adult'
              label='Adult'
              value={this.state.adult}
              onChange={this.handleCheckbox}
            />
            <Checkbox
              toggle
              name='active'
              label='Active'
              value='active'
              onChange={this.handleCheckbox}
            />
          </Form.Group>
          <Button type='submit' value='Submit'>Submit</Button>
        </Form>
      </div>
    )
  }
  handleCheckbox(event) {
    console.log('handleCheckbox: ', event.target.name)
    const T = this.state[event.target.name];
    console.log(event.target.name + ' value: ', this.state[event.target.name])
    // if (event.target.name = 'handbook') {
      T ? !T : T;
      this.setState({ [event.target.name]: T})
    // }
    console.log('End handleCheckbox: ',event.target.name, T);
  }
}
