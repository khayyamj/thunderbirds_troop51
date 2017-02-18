import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profiles'

const rootReducer = combineReducers({
   profiles: ProfileReducer
});

export default rootReducer;
