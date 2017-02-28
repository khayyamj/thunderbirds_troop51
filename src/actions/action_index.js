import axios from 'axios';
import CONFIG from './../../server/config';

const PROFILES_URL = `http://localhost:${CONFIG.PORT}/api/profiles/`;
const ACTIVITIES_URL = `http://localhost:${CONFIG.PORT}/api/activities/`;
const TRANSACTIONS_URL = `http://localhost:${CONFIG.PORT}/api/transactions/`;
const BLOG_URL = `http://localhost:${CONFIG.PORT}/api/blog`;

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

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

export function fetchAccountTransactions(props) {
  const request = axios.get(TRANSACTIONS_URL+props);
  return {
    type: FETCH_TRANSACTIONS,
    payload: request
  }
}

export function createTransaction(props) {
  console.log('****************  Submitting transaction url: ', TRANSACTIONS_URL, 'Props: ', props);
  const request = axios.post(TRANSACTIONS_URL, props);
  return {
    type: CREATE_TRANSACTION,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(BLOG_URL);
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPosts() {
  const request = axios.get('');
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
