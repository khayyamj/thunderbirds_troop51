import React, { Component } from 'react';
class Comp extends Component {

  render() {
    const url = 'http://www.pngall.com/wp-content/uploads/2016/10/Calendar-PNG-HD.png';
    return(
      <div>
         <img src={url} />
      </div>
    );
  }
}
export default Comp;
