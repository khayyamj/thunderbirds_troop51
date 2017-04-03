import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';
import { fetchProfile} from './../actions/action_index';
import RosterList from './../components/roster_list';
import AddTransaction from './../components/Add_transaction';
import UpdateProfile from './../components/Update_profile';
import AddActivity from './../components/Add_activity';
import AdminNav from './../components/admin_nav';

let toggle = false;

export default class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      date: '',
      profileid: '',
      profileView: false,
      transactionsView: false,
      activityView: false
    }
    this.toggleView = this.toggleView.bind(this);
    this.selectProfile = this.selectProfile.bind(this);
  }

  render() {
    console.log('Admin_view-->', this.state.roster);
    return (
      <div>
        <AdminNav toggle={this.toggleView}/>
        <UpdateProfile view={this.state.profileView}/>
        <AddTransaction view={this.state.transactionsView}/>
        <AddActivity view={this.state.activityView}/>
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
    return axios.get('http://localhost:3333/api/profiles')
      .then(profiles => {
        console.log('Admin_view: ', profiles.data);
        this.setState( { roster: profiles.data} );
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
    console.log('toggleView function: ', e.target.name, toggle)
  }
  selectProfile(e,id) {
    console.log('selectProfile: ', id);
    this.setState({ profileid: [id]})

  }
}
