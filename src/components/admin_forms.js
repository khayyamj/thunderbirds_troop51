import React from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

export function UpdateProfile(profileid) {
  return (
    <div>Update Profile</div>
  )
}

export function AddTransaction(profileid) {
  return (
    <div>Add Transaction</div>
  )
}

export function AddActivity() {
  return (
    <div>
    Add Activity
    <Form>
      <Dropdown placeholder='Activity' search selection options={activities} />
      <Form.Group widths='equal'>
        <Form.Field>
          <label>
          <input placeholder='Site' />
          </label>
        </Form.Field>
        <Form.Field>
          <label>
          <input placeholder='Latitude' />
          </label>
        </Form.Field>
        <Form.Field>
          <label>
          <input placeholder='Longitude' />
          </label>
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <label>
        <input placeholder='Notes' />
        </label>
      </Form.Field>
    </Form>
    </div>
  )

}
const activities = [
  {
    key: 'campout',
    value: 'campout',
    text: 'Campout'
  },
  {
    key: 'service',
    value: 'service',
    text: 'Service'
  },
  {
    key: 'activity',
    value: 'activity',
    text: 'Activity'
  },
  {
    key: 'summer-camp',
    value: 'summer-camp',
    text: 'Summer Camp'
  }
]
