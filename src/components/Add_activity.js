import React, { Component } from 'React';
import { Form, Button, Radio } from 'semantic-ui-react';
import { createActivity } from './../actions/action_index.js'

const participants = [];

export default class AddActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      site: '',
      lat: '',
      lng: '',
      date: '',
      notes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,data) {
    const value = event.target.name;
    this.setState({ [value]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createActivity(this.state);
  }
  render() {
    if (!this.props.view) {
      return <div></div>
    }
    return (
      <div>
        Add Activity
        <Form onSubmit={this.handleSubmit}>
          <select name='activity' default={this.state.activity} onMouseLeave={this.handleChange}>
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
                type='date'
                name='date'
                value={this.state.date}
                onChange={this.handleChange} />
            </label>
          </Form.Field>
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
