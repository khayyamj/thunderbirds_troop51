// import as <AccountTotal allTransactions={transaction object} />

import React, { Component } from 'react';

class AccountTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(allTransactions) {
    let total = 0;
    allTransactions.map((transaction) => {
      let amount = parseInt(transaction.amount);
      total += amount;
    })
    return total;
  }

  listTransactions(allTransactions) {
    if (allTransactions.length === 0) {
      return <div> No Transactions </div>
    }
    return allTransactions.map((transaction, i) => {
      return (
        <li key = {transaction.transactionid}> {transaction.date} {transaction.amount} {transaction.activity} </li>
      )
    })
  }

  render() {
    if(!this.props.allTransactions) {
      return <div> Calculating Balance </div>
    }
    return(
      <div style={{fontWeight: "bold",fontSize: 30}}>
        Scout Account Balance <br />
        $ {this.calculateTotal(this.props.allTransactions)} <br />
        <ol style={{fontSize: 15, fontWeight: "normal", decoration: "none"}}>
        <span style={{fontWeight: "bold", fontSize: 20}}>
          Recent Account Transactions </span> <br />
          {this.listTransactions(this.props.allTransactions)}
        </ol>
      </div>
    );
  }
}
export default AccountTotal;
