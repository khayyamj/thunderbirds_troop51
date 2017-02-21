import { FETCH_ROSTER, CREATE_PROFILE } from './../actions/action_index'

const INITIAL_STATE = { roster: [], profile: null };

export default function(state = [], action) {
   switch (action.type) {
      case FETCH_ROSTER:
         return action.payload.data;
      case CREATE_PROFILE:
         return [ ...state, profile: action.payload.data];

      default:
         return state;
   }
}
