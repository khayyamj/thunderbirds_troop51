import axios from 'axios';
const PROFILES_URL = 'http://localhost:3333/api/profiles/';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';

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
   return {
      type: 'NONE',
      payload: null
   }
}

export function createBlogPost() {
   console.log('createBlogPost function called');
   return {
      type: 'NONE',
      payload: null
   }
}
