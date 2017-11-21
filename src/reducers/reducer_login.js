import {LOGGEDIN, LOGGEDOUT} from '../actions';

const INITIAL_STATE = { login: false };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGGEDIN:
      return {...state, login: true};
    case LOGGEDOUT:
      return {...state, login: false};
    default:
      return state;
  }
}
