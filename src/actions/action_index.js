import axios from 'axios';
const PROFILES_URL = 'http://localhost:3333/api/profiles/';
const ACTIVITIES_URL = 'http://localhost:3333/api/activities/';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';

export function fetchRoster() {
   const request = axios.get(PROFILES_URL);
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
   const request = axios.put(PROFILES_URL + props);
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
   const request = null;
   return {
      type: 'NONE',
      payload: request
   }
}

export function createBlogPost() {
   console.log('createBlogPost function called');
   const request = null;
   return {
      type: 'NONE',
      payload: request
   }
}

export function fetchAccount(props) {
  console.log('fetchAccounts function called');
  const request = null;
  return {
    type: FETCH_TRANSACTIONS,
    payload: request
  }
}

export function createTransaction(props) {
  console.log('createTransaction function called, submitted ', props);
  const request = null;
  return {
    type: CREATE_TRANSACTION,
    payload: request
  }
}
