import React, { Component } from 'react';

const url = './../../images/thunderbird.png',
      fbIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-facebook-icon.png',
      tIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-twitter-icon.png';

class Header extends Component {

  render() {

    return(
      <div className="Header">
         <div className="logo_header">
           <img src={url}/>
         </div>
         <div className="headline">
           <span className="title">Over 100 Years of Scouting</span> <br />
           <span>Troop 51</span>
         </div>
         <div className="social-media-icons">
            <img src={fbIconUrl} style={{width: 100}} />
            <img src={tIconUrl} style={{width: 100}} />
         </div>
      </div>
    );
  }
}
export default Header;
