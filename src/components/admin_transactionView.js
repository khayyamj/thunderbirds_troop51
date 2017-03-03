// needs object with transactions and display class

import React, { Component } from 'react';

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
      console.log('Profiles: ', profiles);
    })
console.log('<--------- finished filtering active members');

    return(
      profiles.map((profile) => { // map over filtered array of active members
        let tArray = [];
        transactions.map((transaction) => {
          console.log('profileid: ',profile,'transaction: ', transaction.profileid);
          if(transaction.profileid == profile) {
            tArray.push(transaction);
            console.log('Transaction added to array', tArray)
          }
        })
        return tArray.map((t, i) => {
          console.log('tArray map', i)
          return (
            <div key={t.transactionid}>
                {i}->
                {t.firstname} {t.lastname}
                {t.date} {t.amount} {t.activity} {t.notes}

            </div>
          )
        })
      })
    )
  }
  render() {
    return(
      <div className={this.props.transProps.displayTransClass}>
        {this.renderTransactionList()}
      </div>
    );
  }
}
export default AllTransactionsView;
