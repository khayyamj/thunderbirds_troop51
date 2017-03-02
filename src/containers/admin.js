import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchRoster, fetchAllTransactions } from './../actions/action_index';
import { Link } from 'react-router';
import RosterAdmin from './../components/admin_profileView';
import AllTransactionsView from './../components/admin_transactionView';
import CreateActivity from './../components/create_activity';

let profileToggleShow = false;
let transToggleShow = false;
let profileText = 'Edit Profiles';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileText: 'Edit Profiles',
      displayProfClass: 'profileNoDisplay',
      transText: 'Add Transactions',
      displayTransClass: 'profileNoDisplay'
    };
    this.listProfiles = this.listProfiles.bind(this);
    this.listTransactions = this.listTransactions.bind(this);
  }

  componentWillMount() {
    this.props.fetchRoster();
    this.props.fetchAllTransactions();
  }

  listProfiles() {
    profileToggleShow = !profileToggleShow;
    if (profileToggleShow === true) {
      this.setState({
        profileText: 'Hide Profiles',
        displayProfClass: 'profileDisplay',
        transText: 'Add Transactions',
        displayTransClass: 'profileNoDisplay'
      })
    } else {
      this.setState({
        profileText: 'Edit Profiles',
        displayProfClass: 'profileNoDisplay'
      })
    }
  }
  listTransactions() {
    transToggleShow = !transToggleShow;
    if (transToggleShow === true) {
      this.setState({
        transText: 'Hide Transactions',
        displayTransClass: 'profileDisplay',
        profileText: 'Edit Profiles',
        displayProfClass: 'profileNoDisplay'
      })
    } else {
      this.setState({
        transText: 'Add Transactions',
        displayTransClass: 'profileNoDisplay'
      })
    }
  }

  render() {
    const profiles = this.props.profiles.roster;
    let profileProps = {
        profiles: this.props.profiles.roster,
        displayProfClass: this.state.displayProfClass
        },
        transProps = {
          transactions: this.props.transactions.allTransactions,
          displayTransClass: this.state.displayTransClass
        }
    return(
      <div>
        <div className="Admin-dashboard">
          <button className="button" onClick={this.listProfiles}> {this.state.profileText} </button>
          <button className="button" onClick={this.listTransactions}> {this.state.transText} </button>
          <button className="button"> Add Activity </button>
        </div>
        <RosterAdmin
          passedProps={profileProps}
          />
        <AllTransactionsView
          transProps={transProps}
          profProps={profileProps}
          />
        <CreateActivity
          profProps={profileProps}
          />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    transactions: state.transactions
  }
};
var mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ fetchRoster, fetchAllTransactions }, dispatch);
}
export default connect(mapStateToProps, {fetchRoster,fetchAllTransactions})(Admin);
