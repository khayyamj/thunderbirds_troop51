import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { fetchAccount, createTransaction } from './../actions/action_index';

class Account extends Component {
  constructor(props) {
    super(props);
      this.state = {
        accounting: '+',
        activity: '',
        profileid: this.props.params.profileid,
        amount: 0.00,
        date: '',
        activity: 'dues',
        actid: null,
        notes: ''
      };

    this.updateValue = this.updateValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    console.log('Account --> componentWillMount --> this.props ', this.props)
    this.props.fetchAccount(this.props.params.profileid)
  }

  updateValue(event) {
    const e = event.target,
          name = e.name,
          value = e.value;
    this.setState({ name: value });
  }

  onSubmit(props) {
    console.log('Account --> onSubmit --> props: ', props);
    this.props.createTransaction(props);
  }

  render() {
    if (!this.props.transactions) {
       return <div>Loading...</div>;
    }

    const { fields: {profileid, amount, notes, date, activity, actid, accounting}, handleSubmit} = this.props,
        account = this.props.transactions;

    return(
      <div>

      <div className="account-header">Account Page </div>
        <div className="account-profile">
          Profile id:
          Account balance: {console.log('account --> this.props.transactions: ' + this.props.transactions)}

        </div>
        <form className="transaction-form" onSubmit={handleSubmit(this.onSubmit}>
          <div className="account-transaction">
            Transaction information --> <br />
            <input type='date' {...date} /> <br />
            <select
              name="accounting"
              value={this.state.accounting}
              onChange={this.updateValue}>
              <option value="+">Paid</option>
              <option value="-">Owe</option>
            </select> $<input type='text' placeholder="0.00" {...amount}/> <br />
            <select name="activity" {...activity}>
              <option value="dues">Dues</option>
              <option value="campout">Campout</option>
              <option value="activity">Activity</option>
              <option value="summer_camp">Summer Camp</option>
              <option value="other">Other</option>
            </select>
            <input type='text' placeholder="Memo" {...notes} /> <br />
            <button type='submit' className='nav-btn'>Submit</button>
          </div>
        </form>
        <div>
          Testing FormFields: <br />

        </div>
      </div>
    );
  }
}

function mapStateToProps({ transactions }) {
   return { transactions };
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchAccount, createTransaction }, dispatch);
};
export default reduxForm({
  form: 'AccountTransaction',
  fields: ['profileid', 'amount', 'notes', 'date', 'activity', 'actid', 'accounting']
},mapStateToProps, mapDispatchToProps)(Account);
