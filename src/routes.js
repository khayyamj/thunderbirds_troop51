import React from 'react';
import { Route, IndexRoute, browserHistory, Router, Redirect } from 'react-router';
import AUTH0 from './../config';
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
import Blog from './components/blog';
import Contact from './components/contact';
import Handbook from './components/handbook';
import Dinner from './components/dinner';
import NewBlogPost from './components/blog_new_post';
import Home from './components/home';
import config from './../config';

const { clientId, domain } = config();


const auth = new AuthService(clientId, domain);
// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export default (
   <Route path="/" component={App} >
      <IndexRoute component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/profile_create" component={ProfileCreate} />
      <Route path="/profile/:profileid" component={Profile} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/summer-camp" component={SummerCamp} />
      <Route path="/advancement" component={Advancement} />

      <Route path="/roster" component={Roster} />
      <Route path="/about" component={About} />
      <Route path="/activities" component={Activities} />
      <Route path="/blog" component={Blog} />
      <Route path="/newpost" component={NewBlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/handbook" component={Handbook} />
      <Route path="/dinner" component={Dinner} />

   </Route>
);
      // <Route path="/login" component={Login} onEnter={requireAuth} />
      // <Route path="/roster" component={Roster} onEnter={requireAuth} />
