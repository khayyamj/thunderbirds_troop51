import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { Button } from 'semantic-ui-react';
import { fetchProfile} from './../actions/action_index';
import RosterList from './../components/roster_list';
import AddTransaction from './../components/Add_transaction';
import UpdateProfile from './../components/Update_profile';
import AddActivity from './../components/Add_activity';
import AdminNav from './../components/admin_nav';
import ResourceLinks from './../components/Resource_Links';
import CONFIG from './../../server/config';

let toggle = false, scout={};
const URL = `${CONFIG.URL}`;
const PROFILES_URL = `${URL}${CONFIG.PORT}/api/profiles/`;

export default class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      date: '',
      profileid: '',
      profileView: false,
      transactionsView: false,
      activityView: false,
      scout: {},
      permission: null
    }
    this.toggleView = this.toggleView.bind(this);
    this.selectProfile = this.selectProfile.bind(this);
    this.resetScout = this.resetScout.bind(this);
    this.reloadRoster = this.reloadRoster.bind(this);
  }

  render() {
    if (this.state.permission != 'admin') {
      return (
        <div className="admin-page-denied-access">
          You do not have permission to access this page
          <ResourceLinks />
        </div>
      )
    }

    return (
      <div className="admin-container">
        <AdminNav toggle={this.toggleView}/>
        <UpdateProfile
          view={this.state.profileView}
          scout={this.state.scout}
          reset={this.resetScout}
          reloadRoster = {this.reloadRoster}/>
        <AddTransaction
          view={this.state.transactionsView}
          scout={this.state.scout}/>
        <AddActivity
          view={this.state.activityView}
          scout={this.state.scout}/>
        <RosterList
          roster={this.state.roster}
          selectProfile={this.selectProfile}/>
      </div>
    )
  }

  componentWillMount() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    }
    if(mm<10) {
        mm='0'+mm;
    }
    this.setState( { date: dd+'/'+mm+'/'+yyyy } );
  }

  componentDidMount() {
    return axios.get(PROFILES_URL)
      .then(profiles => {
        this.setState( { roster: profiles.data} );
        let clientID = JSON.parse(localStorage.getItem('profile')).clientID;
        let user = profiles.data.find(scouter => {
          return scouter.clientid === clientID
        })
        this.setState({ permission: user.permissions });
    })
  }

  toggleView(e) {
    let toggle = !this.state[e.target.name];

    this.setState({ [e.target.name]: toggle });
    if (e.target.name === 'profileView') {
      this.setState({ transactionsView: false, activityView: false})
    } else
    if (e.target.name === 'transactionsView') {
      this.setState({ profileView: false, activityView: false})
    } else
    if (e.target.name === 'activityView'){
      this.setState({ profileView: false, transactionsView: false})
    }
  }
  selectProfile(e,id) {
    this.setState({ profileid: [id]})
    for (var person in this.state.roster) {
      if (this.state.roster[person].profileid === id) {
        scout = this.state.roster[person];
        this.setState({ scout: scout });
      }
    }
  }

  resetScout() {
    this.setState({ scout: {} })
  }

  reloadRoster() {
    return axios.get(PROFILES_URL)
      .then(profiles => {
        this.setState( { roster: profiles.data} );
    })
  }
}
