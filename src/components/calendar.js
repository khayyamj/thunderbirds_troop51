import React, { Component } from 'react';
class Comp extends Component {

  render() {
    const url = 'http://www.pngall.com/wp-content/uploads/2016/10/Calendar-PNG-HD.png';
    return(
      <div className="calendar-display">
         <iframe className="calendar-display" src="https://calendar.google.com/calendar/embed?src=calendar%40mytroop51.com&ctz=America/Denver" ></iframe>
      </div>
    );
  }
}
export default Comp;
