import axios from 'axios';
const PROFILES_URL = 'http://localhost:3000/api/profiles';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const CREATE_PROFILE = 'CREATE_PROFILE';

export function fetchRoster() {
   const request = axios.get(PROFILES_URL);
   return {
      type: FETCH_ROSTER,
      payload: request
   };
}

export function createProfile(props) {
   const request = axios.post(PROFILES_URL, props);
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
