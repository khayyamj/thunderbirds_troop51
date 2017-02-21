import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profiles';
import NavLinkReducer from './reducer_nav-links';
import Campouts from './reducer_campouts';
import { reducer as formReducer } from 'redux-form';
import AUTH0 from './../../config.js';

const rootReducer = combineReducers({
   auth0: AUTH0,
   profiles: ProfileReducer,
   navLinks: NavLinkReducer,
   campouts: Campouts,
   form: formReducer
});

export default rootReducer;
