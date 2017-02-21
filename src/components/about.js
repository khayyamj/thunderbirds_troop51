import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {

  render() {
    const url = 'https://www.lee.senate.gov/public/_cache/files/6bc5e540-5c53-410e-8ba1-b9877be2e6c2/dsc-0051.jpg';
    return(
      <div>
         This is the about page <br />
         <img src={url} style={{width: 400}}/> <br />
         <Link to='/handbook' className='nav-btn'> Handbook </Link>
      </div>
    );
  }
}
export default About;
