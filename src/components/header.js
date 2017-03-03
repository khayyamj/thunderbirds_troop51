import React, { Component } from 'react';

const url = './../../images/thunderbird.png',
      fbIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-facebook-icon.png',
      tIconUrl = 'http://icons.iconarchive.com/icons/icontexto/social-inside/256/social-inside-twitter-icon.png',
      fbURL = 'https://www.facebook.com/Troop-51-of-Provo-Utah-108463195857584',
      tURL = '';

class Header extends Component {

  render() {

    return(
      <div className="Header">
         <div className="logo_header">
           <img src={url}/>
         </div>
         <div className="headline">
           <span>Troop 51</span><br />
           <span className="title">Over 100 Years of Scouting</span>

         </div>
         <div className="social-media-icons">
            <a href={fbURL}> <img src={fbIconUrl} style={{width: 100}} /> </a>
            <a href='#'> <img src={tIconUrl} style={{width: 100}} /> </a>
         </div>
      </div>
    );
  }
}
export default Header;
