import { FETCH_ROSTER, CREATE_PROFILE, FETCH_PROFILE, UPDATE_PROFILE } from './../actions/action_index'

export const INITIAL_STATE = { roster: [], profile: null, user: [] };

export default function(state = INITIAL_STATE, action) {
   switch (action.type) {
      case FETCH_ROSTER:
      console.log('reducer_profiles--> FETCH_ROSTER updating reducer');
         return {...state, roster: action.payload.data};
      case CREATE_PROFILE:
         return {...state, profile: action.payload.data};
      case FETCH_PROFILE:
         return {...state, profile: action.payload.data};
      case UPDATE_PROFILE:
      return {...state, profile: action.payload.data};
      default:
         return state;
   }
}
