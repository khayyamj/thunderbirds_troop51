import React, { Component } from 'react';
class Dinner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
         Spaghetti Dinner Page <br />
         <img src='http://www.clipartkid.com/images/39/spaghetti-clipart-faDqiC-clipart.gif' style={{height: 250}} />
      </div>
    );
  }
}
export default Dinner;
