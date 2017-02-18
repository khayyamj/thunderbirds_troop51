import React, { Component } from 'react';
class Advancement extends Component {

  render() {
    const url = 'https://upload.wikimedia.org/wikipedia/en/0/01/Eagle_Scout_medal_(Boy_Scouts_of_America).png';
    return(
      <div>
         Advancement<br />
         <img src={url} />
      </div>
    );
  }
}
export default Advancement;
