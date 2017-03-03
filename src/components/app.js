import React, { Component, PropTypes as T } from 'react';
import { Jumbotron } from 'react-bootstrap';


import Header from './header';
import NavBar from './navbar';
import SideBar from './sidebar'

export default class App extends Component {
  static contextTypes = {
    router: T.object
  }

 render() {
   let children = null;
   if (this.props.children) {
     children = React.cloneElement(this.props.children, {
       auth: this.props.route.auth // sends auth instance from route to children
    })
  }
    return (
       <div className="body">
          <Header />
          <NavBar />
          <div className="main-body">
             <div className="left">{children}</div>
             <SideBar />
          </div>
       </div>
    );
   }
}
