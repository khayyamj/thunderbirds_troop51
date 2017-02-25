import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profiles';
import NavLinkReducer from './reducer_nav-links';
import Activities from './reducer_activities';
import AccountReducer from './reducer_account'
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
   profiles: ProfileReducer,
   navLinks: NavLinkReducer,
   activities: Activities,
   accounts: AccountReducer,
   form: formReducer
});

export default rootReducer;
