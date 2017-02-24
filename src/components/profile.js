import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from './../actions/action_index';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {profile: undefined};
  }

  componentWillMount() {
   this.props.fetchProfile(this.props.params.profileid)
   .then((request) => {
      console.log('request returned: ',request);
      this.setState({ profile: request.payload.data})
   })
  }

  // request is being returned with the correct information
  // but this page is not re-rendering with the new information.
  // ===============================================================

  render() {
     const { profile } = this.props;
     if (!profile) {
        return <div>Loading...</div>;
     }
     console.log('Request returned: ', this.state.profile);
    return(
      <div>
      Profile Page <br />
      Profile id: {this.state.profileid} <br />
      {this.state.profile}

      </div>
    );
  }
}

function mapStateToProps(state) {
   return { profile: state.profiles.profile };
}
export default connect(mapStateToProps, { fetchProfile })(Profile);
