import { FETCH_TRANSACTIONS } from './../actions/action_index'

const INITIAL_STATE = { transactions: null }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
       return {...state, transactions:[
          {
             transactionid: 217,
             scoutid: 1,
             amount: 25.00,
             notes: 'Partial Dues',
             date: '2017/02/14',
             event: 'dues',
             eventid: null
          },
          {
             transactionid: 256,
             scoutid: 1,
             amount: 10.00,
             notes: 'Winter Campout',
             date: '2017/02/17',
             event: 'campout',
             eventid: 2
          },
          {
             transactionid: 334,
             scoutid: 1,
             amount: -60.00,
             notes: 'Semi-annual dues due',
             date: '2017/02/28',
             event: 'dues',
             eventid: null
          },
          {
             transactionid: 444,
             scoutid: 3,
             amount: 1.00,
             notes: 'Winter Campout',
             date: '2017/03/01',
             event: 'campout',
             eventid: 2
          }
        ]
      };
    default:
       return state;
  }
}
