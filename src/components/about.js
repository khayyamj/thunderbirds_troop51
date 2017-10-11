import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';

class About extends Component {

  render() {
    const url = 'https://www.lee.senate.gov/public/_cache/files/6bc5e540-5c53-410e-8ba1-b9877be2e6c2/dsc-0051.jpg';
    return(
      <div className="about-container">
         <p>Boy Scout Troop 51 is Utah’s Best Independent Boy Scout Troop, providing boys in Utah County, Provo and Orem with a true BSA Scouting experience. <strong>From hiking, kayaking, camping, and white water rafting to backpacking, rock climbing, high adventure and summer camps, we know how to have fun!</strong> </p>
         <p>And through the <strong>patrol method, community service projects</strong> and <strong>leadership development</strong>, our boy-led Troop develops our Scouts’ leadership and character. If you want to become an Eagle Scout and have a great outdoor Scouting experience, this is the place to be! </p>
         <p>Founded in 1916 and with over 100 years of history, we’re the oldest Boy Scout Troop in Utah and one of the oldest Troops in the western United States.&nbsp; We’re also your family’s one-stop shop for all of the entire Scouting experience, with <a target="_blank" title="Cub Scout Pack 51" href="http://mypack51.com/">Cub Scout Pack 51</a> offering Scouting to boys ages 6-11. </p>
         <p>Our community-sponsored Troop meets at the Provo Elks Lodge in East Bay Provo and we’re part of the Utah National Parks Council. We always welcome families of all backgrounds to join us and find out how we are focused on delivering the best Scouting program around.</p>
         <p>The troop meets every Thursday from 7:00 - 8:30 p.m. <br />
            Provo Elks Lodge <br />
            1000 S. University Ave. <br/>
            Provo, UT 84601 </p>
         <Button color='orange'>
          <Link to='/handbook'> Troop Handbook </Link>
        </Button>
        <Button color='orange'>
         <Link to='/eaglescouts'> Eagle Scouts </Link>
       </Button>
       <Button color='orange'>
        <Link to='/scoutmasters'> Scoutmasters </Link>
      </Button>
      </div>
    );
  }
}
export default About;
