import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTransaction } from './../actions/action_index.js';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      accounting: 'debit',
      amount: '',
      activity: 'dues',
      notes: '',
      profileid: null,
      firstname: '',
      lastname: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('Add_transaction --> componentWillReceiveProps: ', nextProps.scout);
    if (nextProps.view === false) {return null;}
    this.setState({ profileid: nextProps.scout.profileid});
    this.setState({ firstname: nextProps.scout.firstname });
    this.setState({ lastname: nextProps.scout.lastname });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    // console.log('handleChange -->', e.target.name, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('handleSubmit: ', this.state);
    let transactionObj = {
      date: this.state.date,
      profileid: this.state.profileid,
      amount: this.state.amount,
      accounting: this.state.accounting,
      activity: this.state.activity,
      actid: null,
      notes: this.state.notes
    }
    // console.log('Submit transaction obj: ', transactionObj);
    this.props.createTransaction(transactionObj);
    alert('Transaction added for ' + this.state.firstname);
    this.setState({
      date: '',
      accounting: 'debit',
      amount: '',
      activity: '',
      notes: '',
      profileid: null,
      firstname: '',
      lastname: ''
    })
  }

  render() {
    if (!this.props.view) {
      return <div></div>
    }
    // console.log('Add_transaction state: ',this.state)
    return (
      <div>
        Add Transaction
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <input
                type='profileid'
                name='profileid'
                placeholder='Profile ID:'
                value={this.state.profileid}
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <input
                type='firstname'
                name='firstname'
                placeholder='First Name'
                value={this.state.firstname}
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <input
                type='lastname'
                name='lastname'
                placeholder='Last Name'
                value={this.state.lastname}
                onChange={this.handleChange} />
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
          <Form.Group widths='equal'>
            <Form.Field>
              <select
                name='accounting'
                value={this.state.accounting}
                onChange={this.handleChange}>
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
              <select name='activity' value={this.state.activity} onChange={this.handleChange}>
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
const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ createTransaction }, dispatch);
}
export default connect (null, mapDispatchToProps)(AddTransaction);
