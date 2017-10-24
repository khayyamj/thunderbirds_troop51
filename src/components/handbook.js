import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';
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
      <div className="about-container handbook">
        <Header as='h1' textAlign='center'>Troop Handbook</Header>
        <div className="about-nav-buttons">
          <Button  className="button-padding" color="orange">
            <Link to="/handbook"> Troop Handbook </Link>
          </Button>
          <Button className="button-padding" color="orange">
            <Link to="/eaglescouts"> Eagle Scouts </Link>
          </Button>
          <Button className="button-padding" color="orange">
            <Link to="/scoutmasters"> Scoutmasters </Link>
          </Button>
          <div className="handbook-table-of-contents">
            <span className="contents-header">Table of Contents</span> <br />
            <a href="#scouting-values">Scouting Values</a><br />
            <a href="#religious-affiliation">Religious Affiliation</a><br />
            <a href="#internet-policy">Internet Policy</a><br />
            <a href="#advancement">Advancement</a><br />
            <a href="#uniforms">Uniforms</a><br />
            <a href="#troop-meetings">Troop Meetings</a><br />
            <a href="#troop-calendar">Troop Calendar</a><br />
            <a href="#troop-leadership">Troop Leadership</a><br />
            <a href="#outdoor-program">Outdoor Program</a><br />
            <a href="#finances">Finances</a><br />
            <a href="#scout-equipment">Scout Equipment</a><br />
            <a href="#discipline">Discipline</a><br />
          </div>
          <div className="top-anchor-tag">
            <a href="#top">Back to Top</a><br />
          </div>
        </div>
        <br />
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

// TODO create table of contents with links
// TODO format handbook page
