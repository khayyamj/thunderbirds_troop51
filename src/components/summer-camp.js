import React, { Component } from 'react';
class SummerCamp extends Component {

  render() {
    const url='http://images.clipartpanda.com/tent-clip-art-gerald_g_sleeping_in_a_tent-1331px.png';
    return(
      <div>
         <span>Summer Camp is just around the corner</span>
         <img src={url} style={{width: 400}} />
      </div>
    );
  }
}
export default SummerCamp;
