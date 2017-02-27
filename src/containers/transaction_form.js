import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { reduxForm } from 'redux-form';
import { createTransaction} from './../actions/action_index';
class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateValue = this.updateValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateValue(event) {
    const e = event.target,
          name = e.name,
          value = e.value;
    this.setState({ [event.target.name]: value });
  }

  onSubmit(props) {
    const transaction = {
      date: props.date,
      profileid: this.props.profileid,
      amount: props.amount,
      accounting: props.accounting,
      activity: props.activity,
      actid: null,
      notes: props.notes
    };
    console.log('onSubmit ---> transaction object: ' + transaction);
    this.props.createTransaction(transaction);
  }

  render() {
    const { fields: {profileid, amount, notes, date, activity, actid, accounting}, handleSubmit} = this.props;
    return(
      <div>
      <form className="transaction-form" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="account-transaction">
          Transaction information --> <br />
          <div className={`form-group ${date.touched && date.invalid ? 'has-danger' : ''}`}>
            <div className='text-help'>{date.touched ? date.error : ''}</div>
            <input type='date' {...date} />
          </div>
          <select
            {...accounting}
            name="accounting"
            value={this.state.accounting}
            onChange={this.updateValue}  >
            <option>Choose</option>
            <option value="+">Paid</option>
            <option value="-">Owe</option>
          </select> {accounting.touched ? accounting.error : ''}
          $<input type='text' placeholder="0.00" {...amount}/>
          {amount.touched ? amount.error : ''}<br />
          <select
            {...activity}
            name="activity"
            value={this.state.activity}
            onChange={this.updateValue}  >
            <option> Pick one </option>
            <option value="dues">Dues</option>
            <option value="campout">Campout</option>
            <option value="activity">Activity</option>
            <option value="summer_camp">Summer Camp</option>
            <option value="other">Other</option>

          </select>
          {activity.touched ? activity.error : ''}
          <input type='text' placeholder="Memo" {...notes} /> <br /> {notes.touched ? notes.error : ''}
          <input value={this.state.activity} {...activity} style={{display: 'none'}} />
          <input value={this.state.accounting} {...accounting} style={{display: 'none'}} />
          <input value={this.state.profileid} {...profileid} style={{display: 'none'}} />

          <button type='submit' className='nav-btn'>Submit</button>

        </div>
      </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.accounting) {
    errors.accounting = 'Pick a transaction';
  }
  if (!values.amount) {
    errors.amount = 'Enter amount';
  }
  if (!values.date) {
    errors.date = 'Enter transaction date';
  }
  if (!values.notes) {
    errors.notes = 'Enter a memo for this transaction';
  }
  if (!values.activity) {
    errors.activity = 'Pick a Category';
  }
  return errors;
}
function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
};
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({  createTransaction }, dispatch);
}
export default reduxForm({
  form: 'AccountTransaction',
  fields: ['profileid', 'amount', 'notes', 'date', 'activity', 'actid', 'accounting'], validate
},mapStateToProps, mapDispatchToProps)(TransactionForm);
