import { FETCH_ROSTER, CREATE_PROFILE, FETCH_PROFILE, UPDATE_PROFILE, UPDATE_LOGIN_PROFILE, CREATE_LOGIN_PROFILE } from '../actions'

export const INITIAL_STATE = { roster: [], profile: [], user: [] };

export default function(state = INITIAL_STATE, action) {
   switch (action.type) {
      case FETCH_ROSTER:
         return {...state, roster: action.payload.data};
      case CREATE_PROFILE:
         return {...state, profile: action.payload.data};
      case FETCH_PROFILE:
         return {...state, profile: action.payload.data};
      case UPDATE_PROFILE:
        return {...state, profile: action.payload.data};
      case CREATE_LOGIN_PROFILE:
        return {...state, user: action.payload.data, profile: action.payload.data};
      case UPDATE_LOGIN_PROFILE:
        return {...state, user: action.payload.data, profile: action.payload.data};
      default:
         return state;
   }
}
