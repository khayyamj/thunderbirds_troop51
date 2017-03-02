import { FETCH_POST, FETCH_POSTS, CREATE_POST, FETCH_TAGS, CREATE_TAG, MERGE_BLOG_TAGS } from '../actions/action_index';

const INITIAL_STATE = { all: [], post: {}, tags: [] };

export default function(state = INITIAL_STATE, action) {
   switch(action.type) {
      case FETCH_POST:
         return { ...state, post: action.payload.data};
      case FETCH_POSTS:
         return { ...state, all: action.payload.data };
      case CREATE_POST:
        return {...state, post: action.payload};
      case FETCH_TAGS:
        return {...state, tags: action.payload.data};
      case CREATE_TAG:
        return {...state, tags: action.payload.data};
      case MERGE_BLOG_TAGS:
        return state;
      default:
        return state;
   }
}
