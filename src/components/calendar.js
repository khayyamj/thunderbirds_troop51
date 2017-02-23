import React, { Component } from 'react';
class Comp extends Component {

  render() {
    const url = 'http://www.pngall.com/wp-content/uploads/2016/10/Calendar-PNG-HD.png';
    return(
      <div>
         <iframe src="https://calendar.google.com/calendar/embed?src=calendar%40mytroop51.com&ctz=America/Denver" style={{border: 0, width: 600, height: 400, frameborder: 0, scrolling: "no"}}></iframe>
      </div>
    );
  }
}
export default Comp;
