import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateLoginProfile, createLoginProfile} from './../actions/action_index';
class LoginProfileCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('this.props.profile', this.props.profile)
    console.log('this.state.profile', this.state.profile)
    return(
      <div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    profile: state.profiles.profile
  }
};
var mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ updateLoginProfile, createLoginProfile }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginProfileCreator);
