import { FETCH_POST, FETCH_POSTS, CREATE_BLOG_CONTENT, FETCH_TAGS, CREATE_TAG } from '../actions/action_index';

const INITIAL_STATE = { all: [], post: {}, tags: [] };

export default function(state = INITIAL_STATE, action) {
   switch(action.type) {
      case FETCH_POST:
         return { ...state, post: action.payload.data};
      case FETCH_POSTS:
         return { ...state, all: action.payload.data };
      case CREATE_BLOG_CONTENT:
        return {...state, post: action.payload};
      case FETCH_TAGS:
        return {...state, tags: action.payload.data}
      case CREATE_TAG:
        return {...state, tags: action.payload.data}
      default:
         return state;
   }
}
