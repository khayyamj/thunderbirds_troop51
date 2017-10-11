import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
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
      <div className="about-container">
        <Header as='h1' textAlign='center'>Troop Handbook</Header> <br />
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
