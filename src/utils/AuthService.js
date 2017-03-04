import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EventEmitter } from 'events';
import { isTokenExpired } from './jwtHelper';
import { clientId, domain } from './../../config';
import { createProfile } from './../containers/profile_creator';

const options = {
  primaryColor: "#FF6F00",
  title: "Thunderbirds",
  logo: "./../images/thunderbird.png"
}

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, options, {
      auth: {
        redirectUrl: `${window.location.origin}/login`,
        responseType: 'token'
      }
    })

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    // Saves the user token
    this.setToken(authResult.idToken)
    // navigate to the home route
    browserHistory.replace('/home')
    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.error('Error loading the Profile', error)
      } else {
        console.log('Auth0 profile: ', profile);
        this.setProfile(profile)
// trying to add stores via Provider
        // const INITIAL_STATE = {
        //   age: profile.age_range,
        //   clientid: profile.clientID,
        //   date: profile.created_at,
        //   lastname: profile.family_name,
        //   firstname: profile.given_name,
        //   picture_sm: profile.picture,
        //   picture_lg: profile.picture_large
        // }
        // const store = createStore(INITIAL_STATE);
        // return (
        //   <Provider store={store(INITIAL_STATE)}>
        //     {this.props.createProfile(store)}
        //   </Provider>
        // )


        this.props.createProfile(profile);
      }
    })
  }

  _authorizationError(error){
    // Unexpected authentication error
    console.error('Authentication Error', error)
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
