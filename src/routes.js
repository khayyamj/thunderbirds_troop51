import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AUTH0 from './../config';
import App from './components/app';
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
// import Home from './components/home';

export default (
   <Route path="/" component={App} >
      <IndexRoute component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/summer-camp" component={SummerCamp} />
      <Route path="/advancement" component={Advancement} />
      <Route path="/roster" component={Roster} />
      <Route path="/about" component={About} />
      <Route path="/activities" component={Activities} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/handbook" component={Handbook} />
      <Route path="/dinner" component={Dinner} />

   </Route>
);
