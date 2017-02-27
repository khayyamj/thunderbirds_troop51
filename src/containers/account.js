import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { fetchAccountTransactions, fetchProfile } from './../actions/action_index';
import PicNameHeader from './../components/pic_name';
import TransactionForm from './transaction_form';
import AccountTotal from './account_total';


class Account extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchAccountTransactions(this.props.params.profileid);
    this.props.fetchProfile(this.props.params.profileid);
  }

  render() {
    if (!this.props.transactions) {
      console.log('<---------- Empty Transactions condition')
       return <div>Loading...</div>;
    }
    if (this.props.profiles.profile === null) {
       return <div>Loading...</div>;
    }
    console.log('this.props.transactions ==>> ', this.props.tranactions)

    const account = this.props.transactions;
    console.log('**** Account Transactions: ', account, ' ****');
    console.log('this.props.profiles ==>> ', this.props.profiles);

    return(
      <div>
        <PicNameHeader />
        <div className="account">
          <AccountTotal allTransactions={account}/>
          <TransactionForm profileid={this.props.params.profileid}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ transactions, profiles }) {
   return { transactions, profiles };
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchAccountTransactions, fetchProfile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
