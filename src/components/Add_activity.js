import React, { Component } from 'React';
import { Form, Button, Radio } from 'semantic-ui-react';

export default class AddActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      site: '',
      lat: '',
      lng: '',
      notes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name,event.target.value)
    const value = event.target.name;

    this.setState({ [value]: event.target.value})
    console.log('this.state: ', this.state);
  }

  handleSubmit(event) {
    console.log('handleSubmit: ', this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        Add Activity
        <Form onSubmit={this.handleSubmit}>
          <select name='activity' value={this.state.activity} onClick={this.handleChange}>
            <option value='camping'>Camping</option>
            <option value='service'>Service</option>
            <option value='activity'>Activity</option>
            <option value='summer-camp'>Summer Camp</option>
          </select>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>
              <input
                name='site'
                placeholder='Site'
                value={this.state.site}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='lat'
                placeholder='Latitude'
                value={this.state.lat}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
              <input
                name='lng'
                placeholder='Longitude'
                value={this.state.lng}
                onChange={this.handleChange}/>
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>
            <input
              name='notes'
              placeholder='Notes'
              value={this.state.notes}
              onChange={this.handleChange}/>
            </label>
          </Form.Field>
          <Button type='submit' value='Submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
const activities = [
  {
    // key: 'campout',
    value: 'campout',
    text: 'Campout'
  },
  {
    // key: 'service',
    value: 'service',
    text: 'Service'
  },
  {
    // key: 'activity',
    value: 'activity',
    text: 'Activity'
  },
  {
    // key: 'summer-camp',
    value: 'summer-camp',
    text: 'Summer Camp'
  }
]
