import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { fetchAccount } from './../actions/action_index';

class Account extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {profile: undefined};
  // }
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
   this.props.fetchAccount(this.props.params.profileid)
  }

  onSubmit(props) {
    this.props.createTransaction(props)
    .then(() => {
      this.context.router.push('/')
    })
  }

  render() {
    const { fields: {}, handleSubmit} = this.props,
        account = this.props.accounts;

     console.log('Account page --> ', this.props.accounts);
     if (!this.props.accounts) {
        return <div>Loading...</div>;
     }

    return(
      <div>

      <div className="account-header">Account Page </div>
        <div className="account-profile">
          Profile id: {account.scoutid}

        </div>
        <form >
          <div className="account-transaction">
            Account information -->
            <select name="credit/debit">
              <option value="+" {...accounting}>Paid</option>
              <option value="-" {...accounting}>Owe</option>
            </select> $<input type='text' placeholder="0.00" {...amount}/>
            For <input type='text' placeholder='dues/campout/etc' {...event} />
            Notes <input type='text' {...notes} />

          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ accounts }) {
   return { accounts };
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchAccount }, dispatch);
};
export default reduxForm({
  form: 'AccountTransaction',
  fields: ['profileid', 'amount', 'notes', 'date', 'activity', 'actid','accounting']
},mapStateToProps, mapDispatchToProps)(Account);
