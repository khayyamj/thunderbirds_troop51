import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profiles';
import NavLinkReducer from './reducer_nav-links';
import Campouts from './reducer_campouts';

const rootReducer = combineReducers({
   profiles: ProfileReducer,
   navLinks: NavLinkReducer,
   campouts: Campouts
});

export default rootReducer;
