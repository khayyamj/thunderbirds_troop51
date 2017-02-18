import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import {action} from './../actions/Actions';

class Roster extends Component {

  renderList() {
     return this.props.profiles.map((profile) => {
        return (
            <li key={profile.email} className="profile-item">
               Name: {profile.firstName} <br />
               City: {profile.city} <br />
               Email: {profile.email} <hr />
            </li>
         )
     })
  }

  render() {
     return(
        <ul className="roster-list">
           {this.renderList()}
        </ul>
     )
  }
}
var mapStateToProps = function(state) {
  return {
    profiles: state.profiles
  }
};
var mapDispatchToProps = function (dispatch) {
  return bindActionCreators({ action }, dispatch);
}
export default connect(mapStateToProps)(Roster);



// import React, { Component } from 'react';
//
// export default class Roster extends Component {
//

//
// }
//   render() {
//     const url = 'http://bloximages.chicago2.vip.townnews.com/heraldextra.com/content/tncms/assets/v3/editorial/9/02/9020d89e-30b3-5e17-be98-927e5137a837/5820f6765bd39.image.jpg?resize=1200%2C798';
//     return(
//       <div>
//          <span>Roster</span><br />
//          <img src={url} style={{width: 400}} />
//       </div>
//     );
//   }
// }
// export default Roster;
