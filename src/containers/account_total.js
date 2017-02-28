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
    return allTransactions.map((transaction, i) => {
      return (
        <li key = {transaction.transactionid}> {transaction.date} {transaction.amount} {transaction.activity} </li>
      )
    })

  }

  render() {
    console.log('******>> transaction array <<******', this.props.allTransactions.transactions);

    if(!this.props.allTransactions.transactions) {
      console.log('Empty array')
      return <div> Calculating Balance </div>
    }
    return(
      <div style={{fontWeight: "bold",fontSize: 30}}>
        Scout Account Balance <br />
        $ {this.calculateTotal(this.props.allTransactions.transactions)} <br />
        <ol style={{fontSize: 15, fontWeight: "normal", decoration: "none"}}>
        <span style={{fontWeight: "bold", fontSize: 20}}>
          Recent Account Transactions </span> <br />
          {this.listTransactions(this.props.allTransactions.transactions)}
        </ol>
      </div>
    );
  }
}
export default AccountTotal;
