import {LOGGEDIN, LOGGEDOUT} from './../actions/action_index';

const INITIAL_STATE = { login: false };

export default function(state = INITIAL_STATE, action) {
  console.log('Login Reducer',action);
  switch (action.type) {
    case LOGGEDIN:
      return {...state, login: true};
    case LOGGEDOUT:
      return {...state, login: false};

    default:
      return state;
  }
}
