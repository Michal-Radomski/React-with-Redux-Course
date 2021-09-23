import _ from "lodash";
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions/index";

const PostsReducer = function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);

    case FETCH_POSTS:
      // console.log("action.payload.data:", action.payload.data);
      return _.mapKeys(action.payload.data, "id");

    case FETCH_POST:
      // -ES5 Syntax
      // const post = action.payload.data
      // const newState ={...state}
      // newState[post.id]=post
      // return newState;
      // - ES6 Syntax
      return {...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
};

export default PostsReducer;
