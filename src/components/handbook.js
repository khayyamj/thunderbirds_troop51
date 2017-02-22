import React, { Component } from 'react';
import About from './../handbook/about51';
import ScoutingValues from './../handbook/scouting_values';
import ReligiousAffiliation from './../handbook/religious_affiliation';
import InternetPolicy from './../handbook/internet_policy';
import TroopMembership from './../handbook/troop_membership';
import Advancement from './../handbook/advancement';
import Uniform from './../handbook/uniform';
import TroopMeetings from './../handbook/troop_meetings';
import TroopCalendar from './../handbook/troop_calendar';
import TroopLeadership from './../handbook/troop_leadership';
import OutdoorProgram from './../handbook/outdoor_program';
import Finances from './../handbook/finances';
import ScoutEquipment from './../handbook/scout_equipment';
import Discipline from './../handbook/discipline';

class Handbook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
      Troop Handbook <br />
      <img src='https://img.clipartfox.com/bdce4bc657c1b2e3e1740bdf42944e3e_free-books-clip-art-pictures-clipart-book_600-310.png' style={{height: 250}} />
      <About />
      <ScoutingValues />
      <ReligiousAffiliation />
      <InternetPolicy />
      <Advancement />
      <Uniform />
      <TroopMeetings />
      <TroopCalendar />
      <TroopLeadership />
      <OutdoorProgram />
      <Finances />
      <ScoutEquipment />
      <Discipline />
      </div>
    );
  }
}
export default Handbook;
