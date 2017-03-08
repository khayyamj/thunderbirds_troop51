import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchRoster, fetchAllTransactions } from './../actions/action_index';
import { Link } from 'react-router';
import RosterAdmin from './../components/admin_profileView';
import AllTransactionsView from './../components/admin_transactionView';
import CreateActivity from './../components/create_activity';
import { Button } from 'semantic-ui-react';

let profileToggleShow = false;
let transToggleShow = false;
let actToggleShow = false;
let profileText = 'Edit Profiles';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileText: 'Edit Profiles',
      displayProfClass: 'noDisplay',
      transText: 'Add Transactions',
      displayTransClass: 'noDisplay',
      actText: 'Add Activity',
      displayActClass: 'noDisplay'
    };
    this.listProfiles = this.listProfiles.bind(this);
    this.listTransactions = this.listTransactions.bind(this);
    this.addActivity = this.addActivity.bind(this);
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
        displayProfClass: 'display',
        transText: 'Add Transactions',
        displayTransClass: 'noDisplay',
        actText: 'Add Activity',
        displayActClass: 'noDisplay'
      })
    } else {
      this.setState({
        profileText: 'Edit Profiles',
        displayProfClass: 'noDisplay'
      })
    }
  }
  listTransactions() {
    transToggleShow = !transToggleShow;
    if (transToggleShow === true) {
      this.setState({
        transText: 'Hide Transactions',
        displayTransClass: 'display',
        profileText: 'Edit Profiles',
        displayProfClass: 'noDisplay',
        actText: 'Add Activity',
        displayActClass: 'noDisplay'
      })
    } else {
      this.setState({
        transText: 'Add Transactions',
        displayTransClass: 'noDisplay'
      })
    }
  }

  addActivity() {
    actToggleShow = !actToggleShow;
    if (actToggleShow === true) {
      this.setState({
        actText: 'Hide Activities',
        displayActClass: 'display',
        profileText: 'Edit Profiles',
        displayProfClass: 'noDisplay',
        transText: 'Add Transactions',
        displayTransClass: 'noDisplay'
      })
    } else {
      this.setState({
        actText: 'Add Activity',
        displayActClass: 'noDisplay'
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
        },
        actProps = {
          displayActClass: this.state.displayActClass
        }
    return(
      <div>
        <div className="Admin-dashboard">
          <Button onClick={this.listProfiles}> {this.state.profileText} </Button>
          <Button onClick={this.listTransactions}> {this.state.transText} </Button>
          <Button onClick={this.addActivity}> {this.state.actText} </Button>
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
          actProps={actProps}
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
