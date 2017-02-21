import React, { Component } from 'react';


import Header from './header';
import NavBar from './navbar';
import SideBar from './sidebar'

export default class App extends Component {

   render() {
      console.log('App.js this.props = ', this.props);
      let children = null;
      if (this.props.children) {
         children = React.cloneElement(this.props.children, { auth: this.props.route.auth //sends auth instance from route to children
      })
   }
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
