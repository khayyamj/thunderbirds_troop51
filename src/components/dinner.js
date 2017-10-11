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

// TODO create a full page
// TODO include an option to purchase tickets
// TODO include option to configure variables from an admin pop up modal
//    - date, ticket prices
