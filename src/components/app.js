import React, { Component } from 'react';


import Header from './header';
import NavBar from './navbar';
import SideBar from './sidebar'

export default class App extends Component {

   render() {
      return (
         <div className="body">
            <Header />
            <NavBar />
            <div className="main-body">
               <div className="left">{this.props.children}</div>
               <SideBar />
            </div>
         </div>
      );
   }
}
