import { FETCH_USERS, CREATE_LOGIN_PROFILE, UPDATE_LOGIN_PROFILE, USER_PROFILE } from './../actions/action_index'

export const INITIAL_STATE = { users: [], user: [] };

export default function(state = INITIAL_STATE, action) {
   switch (action.type) {
      case FETCH_USERS:
         return {...state, users: action.payload.data};
      case CREATE_LOGIN_PROFILE:
          return {...state, user: action.payload.data};
      case UPDATE_LOGIN_PROFILE:
          return {...state, user: action.payload.data};
      default:
         return state;
   }
}
