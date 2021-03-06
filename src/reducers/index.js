import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import ProfileReducer from './reducer_profiles';
import NavLinkReducer from './reducer_nav-links';
import Activities from './reducer_activities';
import TransactionsReducer from './reducer_transactions';
import PostsReducer from './reducer_posts';
import UserReducer from './reducer_users';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  login: LoginReducer,
  users: UserReducer,
  profiles: ProfileReducer,
  navLinks: NavLinkReducer,
  activities: Activities,
  transactions: TransactionsReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
