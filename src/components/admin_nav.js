import React from 'react';
import { Button } from 'semantic-ui-react';

export default function AdminNav (props) {
  return (
    <div>
      <Button
        onClick={props.toggle}
        name='profileView'>
        Edit Profiles
      </Button>
      <Button
        onClick={props.toggle}
        name='transactionsView'>
        Add Transactions
      </Button>
      <Button
        onClick={props.toggle}
        name='activityView'>
        Add Activity
      </Button>
    </div>
  )
}
