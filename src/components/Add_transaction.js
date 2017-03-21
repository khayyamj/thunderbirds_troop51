import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      accounting: 'debit',
      amount: '',
      activity: '',
      notes: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log('handleChange -->', e.target.name, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit: ', this.state);
  }

  render() {
    if (!this.props.view) {
      return <div></div>
    }
    return (
      <div>
        Add Transaction
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>
              <input
                type='date'
                name='date'
                value={this.state.date}
                onChange={this.handleChange} />
            </label>
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Field>
              <select
                name='accounting'
                value={this.state.accounting}
                onClick={this.handleChange}>
                <option value='credit'>Credit (+) </option>
                <option value='debit'>Debit (-)</option>
              </select>
            </Form.Field>
            <Form.Field inline>
              <label>$</label>
              <input
                  type='text'
                  placeholder='0.00'
                  name='amount'
                  value={this.state.amount}
                  onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <select name='activity' value={this.state.activity} onClick={this.handleChange}>
                <option value='dues'>Dues</option>
                <option value='camping'>Camping</option>
                <option value='service'>Service</option>
                <option value='activity'>Activity</option>
                <option value='summer-camp'>Summer Camp</option>
              </select>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>
              <input
                width={10}
                type='text'
                placeholder="Memo"
                name='notes'
                value={this.state.notes}
                onChange={this.handleChange} />
            </label>
          </Form.Field>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }

}
