// needs object with transactions and display class

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TransactionForm from '../';

class AllTransactionsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderTransactionList = this.renderTransactionList.bind(this);
  }
  renderTransactionList() {
    const {transactions} = this.props.transProps,
          profiles = [];
    console.log(transactions)
    transactions.map((profile, i) => { // create filtered array of active profiles
      profile.active && profiles.indexOf(profile.profileid) === -1 ? profiles.push(profile.profileid) : console.log('Profile Not Active')
    })

    return(
      profiles.map((profile) => { // map over filtered array of active members
        let tArray = [];
        transactions.map((transaction) => {
          if(transaction.profileid == profile) {
            tArray.push(transaction);
          }
        })
        return tArray.map((t, i) => {
          return (
            <Grid.Row key={t.transactionid}>
                <Grid.Column width={2}>
                  {t.firstname}
                </Grid.Column>
                <Grid.Column width={2}>
                  {t.lastname}
                </Grid.Column>
                <Grid.Column width={3}>
                  {t.date}
                </Grid.Column>
                <Grid.Column width={2}>
                  {t.amount}
                </Grid.Column>
                <Grid.Column width={2}>
                  {t.activity}
                </Grid.Column>
                <Grid.Column width={5}>
                  {t.notes}
                </Grid.Column>
            </Grid.Row>
          )
        })
      })
    )
  }
  render() {
    return(
      <div className={this.props.transProps.displayTransClass}>
        <Grid>
          <TransactionForm /> <br />
          {this.renderTransactionList()}
        </Grid>
      </div>
    );
  }
}
export default AllTransactionsView;
