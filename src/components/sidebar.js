import React, { Component } from 'react';
export default class SideBar extends Component {

  render() {
   const url = 'http://www.pngall.com/wp-content/uploads/2016/10/Calendar-PNG-HD.png';
   return(
         <div className="right">
            Side Bar (right) <br />
            <iframe src="https://calendar.google.com/calendar/embed?title=Troop%2051%20Calendar&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=300&amp;wkst=1&amp;bgcolor=%23ff9900&amp;src=calendar%40mytroop51.com&amp;color=%236f562e&amp;ctz=America%2FDenver" style={{borderWidth:0, width:200, height: 300, frameBorder:0, overflowY: "hidden", scrolling: "no"}}></iframe>
            <hr />
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
