import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';
import { fetchProfile} from './../actions/action_index';
import RosterList from './../components/roster_list';
import { UpdateProfile, AddTransaction, AddActivity} from './../components/admin_forms';
import AdminNav from './../components/admin_nav';

export default class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      date: ''
    }

  }

  render() {
    return (
      <div>
        <AdminNav />
        <UpdateProfile /><AddTransaction /><AddActivity />
        <RosterList roster={this.state.roster}/>
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
    return axios.get('http://localhost:3333/api/profiles').then(profiles => {
      console.log('Admin_view: ', profiles.data);
      this.setState( { roster: profiles.data});

    })
  }
}
