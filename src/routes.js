import React from 'react';
import { Route, IndexRoute, browserHistory, Router, IndexRedirect } from 'react-router';
import App from './components/app';
import AuthService from './utils/AuthService';
import ProfileCreate from './components/profile_create';
import Profile from './components/profile';
import Calendar from './components/calendar';
import SummerCamp from './components/summer-camp';
import Advancement from './components/advancement';
import Roster from './containers/roster';
import About from './components/about';
import Activities from './components/activities';
import Login from './components/login';
import Posts from './components/blog';
import Contact from './components/contact';
import Handbook from './components/handbook';
import Dinner from './components/dinner';
import NewBlogPost from './components/post_new';
import Home from './components/home';
import Account from './containers/account'
import config from './../config';
import Admin from './containers/admin';
import AboutProject from './components/about_project';
import ListEagles from './components/list_eagles';
import Scoutmasters from './components/list_scoutmasters';

const { clientId, domain } = config();


const auth = new AuthService(clientId, domain);
// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export default (
   <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Home} />
      <IndexRedirect to="/home" />

      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/profile_create" component={ProfileCreate} onEnter={requireAuth} />
      <Route path="/profile/:profileid" component={Profile} onEnter={requireAuth} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/summer-camp" component={SummerCamp} />
      <Route path="/advancement" component={Advancement} />

      <Route path="/roster" component={Roster} onEnter={requireAuth} />
      <Route path="/about" component={About} />
      <Route path="/activities" component={Activities} />
      <Route path="/posts" component={Posts} />
      <Route path="/newpost" component={NewBlogPost} onEnter={requireAuth} />
      <Route path="/contact" component={Contact} />
      <Route path="/handbook" component={Handbook} />
      <Route path="/dinner" component={Dinner} />
      <Route path="/account/:profileid" component={Account} onEnter={requireAuth} />
      <Route path="/admin" component={Admin} onEnter={requireAuth} />
      <Route path="/about_project" component={AboutProject} />
      <Route path="/eaglescouts" component={ListEagles} />
      <Route path="/scoutmasters" component={Scoutmasters} />

   </Route>
  );
