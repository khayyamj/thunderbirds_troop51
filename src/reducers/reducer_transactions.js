import { FETCH_TRANSACTIONS, FETCH_ALL_TRANSACTIONS } from '../actions'

const INITIAL_STATE = { transactions: [], allTransactions: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {...state, transactions: action.payload.data};
    case FETCH_ALL_TRANSACTIONS:
      return {...state, allTransactions: action.payload.data};

    default:
       return state;
  }
}
