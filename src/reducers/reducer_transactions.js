import { FETCH_TRANSACTIONS } from './../actions/action_index'

const INITIAL_STATE = { transactions: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
       return {...state, transactions: action.payload.data
      // transactions:[
      //     {
      //        transactionid: 217,
      //        profileid: 1,
      //        amount: 25.00,
      //        accounting: '+',
      //        notes: 'Partial Dues',
      //        date: '2017/02/14',
      //        activity: 'dues',
      //        actid: null
      //     },
      //     {
      //        transactionid: 256,
      //        profileid: 1,
      //        amount: 10.00,
      //        accounting: '+',
      //        notes: 'Winter Campout',
      //        date: '2017/02/17',
      //        activity: 'campout',
      //        actid: 2
      //     },
      //     {
      //        transactionid: 334,
      //        profileid: 1,
      //        amount: -60.00,
      //        accounting: '-',
      //        notes: 'Semi-annual dues due',
      //        date: '2017/02/28',
      //        activity: 'dues',
      //        actid: null
      //     },
      //     {
      //        transactionid: 444,
      //        profileid: 3,
      //        amount: 15.00,
      //        accounting: '+',
      //        notes: 'Winter Campout',
      //        date: '2017/03/01',
      //        activity: 'campout',
      //        actid: 2
      //     },
      //     {
      //        transactionid: 444,
      //        profileid: 3,
      //        amount: 15.00,
      //        accounting: '+',
      //        notes: 'Winter Campout',
      //        date: '2017/03/01',
      //        activity: 'campout',
      //        actid: 2
      //     }
      //   ]
      };
    default:
       return state;
  }
}
