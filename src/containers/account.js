import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { fetchAccount } from './../actions/action_index';

class Account extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {profile: undefined};
  // }

  componentWillMount() {
   this.props.fetchAccount(this.props.params.profileid)
  }

  render() {
     console.log('Profile page --> ', this.props.accounts);
     if (!this.props.accounts) {
        return <div>Loading...</div>;
     }
     const account = this.props.accounts;
    return(
      <div>

      <div className="account-header">Account Page </div>
        <div className="account-profile">
          Profile id: {account.scoutid}
          
        </div>
        <div className="account-transaction">
          Account information -->
          Paid/Owe $<input type='text' placeholder="0.00" />
          For <input type='text' placeholder='dues/campout/etc' />

        </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(Account);
