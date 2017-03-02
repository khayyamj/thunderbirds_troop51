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
          {profiles} = this.props.profProps;

    return(
      profiles.map((profile) => {
        let tArray = [];
        transactions.map((transaction, i) => {
          if(transaction.profileid === profile.profileid) {
            tArray.push(transaction);
          }
        })
        tArray.map((t) => {
          return (
            <div key={t.transactionid}>
              New Entry

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
        TransactionView
        {this.renderTransactionList()}
      </div>
    );
  }
}
export default AllTransactionsView;
