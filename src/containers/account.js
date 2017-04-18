import React, { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { fetchAccountTransactions, fetchProfile } from './../actions/action_index';
import PicNameHeader from './../components/pic_name';
import TransactionForm from './transaction_form';
import AccountTotal from './account_total';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedProfile: false,
      loadedTransactions: false
    }
  }
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchAccountTransactions(this.props.params.profileid)
      .then(() => {
        this.setState({loadedTransactions: true});
      });
    this.props.fetchProfile(this.props.params.profileid)
      .then(() => {
        this.setState({loadedProfile: true});
      });
  }

  render() {
    if (this.state.loadedTransactions === false) {
       return <div> Transactions Loading...</div>;
    }
    if (this.state.loadedProfile === false) {
       return <div>Profile Loading...</div>;
    }

    const account = this.props.transactions.transactions;

    return(
      <div>
        <PicNameHeader profile={this.props.profiles.profile}/>
        <div className="account">
          <AccountTotal allTransactions={account}/>
          <TransactionForm profileid={this.props.params.profileid}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    profiles: state.profiles };
  }
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchAccountTransactions, fetchProfile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);
