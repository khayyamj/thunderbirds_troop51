import axios from 'axios';
import CONFIG from './../../server/config';

const LOGIN_URL=`http://localhost:${CONFIG.PORT}/api/login/`;
const PROFILES_URL = `http://localhost:${CONFIG.PORT}/api/profiles/`;
const ACTIVITIES_URL = `http://localhost:${CONFIG.PORT}/api/activities/`;
const TRANSACTIONS_URL = `http://localhost:${CONFIG.PORT}/api/transactions/`;
const BLOG_URL = `http://localhost:${CONFIG.PORT}/api/blog/`;

export const LOGGEDIN = 'LOGGEDIN';
export const LOGGEDOUT = 'LOGGEDOUT';
export const FETCH_USER_PROFILES = 'FETCH_USER_PROFILES';
export const CREATE_LOGIN_PROFILE = 'CREATE_LOGIN_PROFILE';
export const UPDATE_LOGIN_PROFILE = 'UPDATE_LOGIN_PROFILE';
export const FETCH_ROSTER = 'FETCH_ROSTER';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_ALL_TRANSACTIONS = 'FETCH_ALL_TRANSACTIONS';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_TAGS = 'FETCH_TAGS';
export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_BLOG_CONTENT = 'CREATE_BLOG_CONTENT';
export const MERGE_BLOG_TAGS = 'MERGE_BLOG_TAGS';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const LINK_PARTICIPANTS_TO_ACITIVTY = 'LINK_PARTICIPANTS_TO_ACITIVTY';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';
export const FETCH_ATTENDED_ACTIVITIES = 'FETCH__ATTENDED_ACTIVITIES';
export const FETCH_ALL_PARTICIPANTS = 'FETCH_ALL_PARTICIPANTS';

export function loggedIn() {
  console.log('action_index--> loggedIn Function - set to true');
  return {
    type: LOGGEDIN,
    payload: true
  }
}

export function loggedOut() {
  return {
    type: LOGGEDOUT,
    payload: false
  }
}

export function getUserProfiles() {
  const request = axios.get(LOGIN_URL);
  return {
    type: FETCH_USER_PROFILES,
    payload: request
  }
}

export function createLoginProfile(props) {
  console.log('createLoginProfile props: ', props);
  const request = axios.post(LOGIN_URL, props);
  return {
    type: CREATE_LOGIN_PROFILE,
    payload: request
  }
}

export function updateLoginProfile(props) {
  console.log('updateLoginProfile props: ', props);
  const request = axios.put(LOGIN_URL+props.loginid, props);
  return {
    type: UPDATE_LOGIN_PROFILE,
    payload: request
  }
}

export function fetchRoster() {
   const request = axios.get(PROFILES_URL);
   console.log('action_index: Fetching Roster ');
   return {
      type: FETCH_ROSTER,
      payload: request
   };
}

export function fetchProfile(props) {
   const request = axios.get(PROFILES_URL + props);
   return {
      type: FETCH_PROFILE,
      payload: request
   }
}

export function createProfile(props) {
   const request = axios.post(PROFILES_URL, props);
   return {
      type: CREATE_PROFILE,
      payload: request
   }
}

export function updateProfile(props) {
   const request = axios.put(PROFILES_URL+props.id,  props);
   return {
      type: UPDATE_PROFILE,
      payload: request
   }
}

export function deleteProfile(props) {
   const request = axios.delete(PROFILES_URL + props);
   return {
      type: CREATE_PROFILE,
      payload: request
   }
}

export function submitMessage() {
   console.log('submitMessage function called');
   alert('Message not sent')
   const request = null;
   return {
      type: 'NONE',
      payload: request
   }
}

export function fetchAllTransactions() {
  const request = axios.get(TRANSACTIONS_URL);
  return {
    type: FETCH_ALL_TRANSACTIONS,
    payload: request
  }
}

export function fetchAccountTransactions(props) {
  const request = axios.get(TRANSACTIONS_URL+props);
  return {
    type: FETCH_TRANSACTIONS,
    payload: request
  }
}

export function createTransaction(props) {
  const request = axios.post(TRANSACTIONS_URL, props);
  return {
    type: CREATE_TRANSACTION,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(BLOG_URL, props);
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchTags() {
  const request = axios.get(BLOG_URL+'tag')
  return {
    type: FETCH_TAGS,
    payload: request
  }
}

export function createTags(tag) {
  const request = axios.post(BLOG_URL+'tag',tag)
  return {
    type: CREATE_TAG,
    payload: request
  }
}

export function mergeBlogTags(props) {
  const request = axios.post(BLOG_URL+'tagConnection',props);
  return {
    type: MERGE_BLOG_TAGS,
    payload: request
  }
}

export function fetchPosts() {
  const request = axios.get(BLOG_URL);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(BLOG_URL);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete('');
  return {
    type: DELETE_POST,
    payload: request
  }
}

export function createActivity(props) {
  const request = axios.post(ACTIVITIES_URL, props);
  return {
    type: CREATE_ACTIVITY,
    payload: request
  }
}

export function linkParticipantstoActivity(props) {
  const actid = props.actid, profileid = props.profileid;
  const request = axios.post(`${ACTIVITIES_URL}${actid}/${profileid}`);
  return {
    type: LINK_PARTICIPANTS_TO_ACITIVTY,
    payload: request
  }
}

export function fetchAllActivities() {
  const request = axios.get(ACTIVITIES_URL);
  return {
    type: FETCH_ACTIVITY,
    payload: request
  }
}

export function fetchAllAttendedActivities() {
  const request = axios.get(ACTIVITIES_URL+'attended');
  return {
    type: FETCH_ATTENDED_ACTIVITIES,
    payload: request
  }
}

export function fetchAllParticipants() {
  const request = axios.get(`${ACTIVITIES_URL}participants`)
  return {
    type: FETCH_ALL_PARTICIPANTS,
    payload: request
  }
}
