import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { fetchAccount, fetchProfile } from './../actions/action_index';
import PicNameHeader from './../components/pic_name';
import TransactionForm from './transaction_form';


class Account extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchAccount(this.props.params.profileid);
    this.props.fetchProfile(this.props.params.profileid);
  }

  render() {
    if (!this.props.transactions) {
      console.log('<---------- Empty Transactions condition')
       return <div>Loading...</div>;
    }
    if (this.props.profiles.profile === null) {
            console.log('<---------- Empty Profiles condition')
       return <div>Loading...</div>;
    }
    console.log('this.props.transactions ==>> ', this.props.tranactions)

    const account = this.props.transactions;
    console.log('this.props.fields --> ', this.props.fields)
    console.log('this.props.profiles ==>> ', this.props.profiles);

    return(
      <div>
      <PicNameHeader />
      <div className="account-header">Account Page </div>
        <div className="account-profile">
          Profile id: {this.props.params.profileid} <br />
          Account balance:

        </div>
          <TransactionForm profileid={this.props.params.profileid}/>
      </div>
    );
  }
}

function mapStateToProps({ transactions, profiles }) {
   return { transactions, profiles };
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchAccount, fetchProfile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
