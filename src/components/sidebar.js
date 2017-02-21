import React, { Component } from 'react';
export default class SideBar extends Component {

  render() {
   const url = 'http://www.pngall.com/wp-content/uploads/2016/10/Calendar-PNG-HD.png';
   return(
         <div className="right">
            Side Bar (right) <br />
            <img src={url} style={{width: 100}}/> <hr />
            Resources: <br />
            <a>Council Website</a> <br />
            <a>District Website</a> <br />
            <a>Scoutbook</a> <br />
            More to come... <hr />
            Meeting Information: <br />
            Elk's Lodge <br />
            1000 S. University Ave. <br />
            Provo, UT <br />
            Scoutmaster: Kevin Keaton <br />
            Phone: (801) 687-2725 <br />
            Time: Thursdays at 7:00 - 8:30 p.m.
         </div>
   );
  }
}
