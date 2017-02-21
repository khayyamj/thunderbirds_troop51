import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AuthService from './utils/AuthService';
import AUTH0 from './../config';
import App from './components/app';
import Profile from './components/profile';
import Calendar from './components/calendar';
import SummerCamp from './components/summer-camp';
import Advancement from './components/advancement';
import Roster from './containers/roster';
import About from './components/about';
import Campouts from './components/campouts';
import Login from './components/login';
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
      <Route path="/campouts" component={Campouts} />

   </Route>
);
