import _ from "lodash";
import {FETCH_POSTS} from "../actions/index";

const PostsReducer = function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log("action.payload.data:", action.payload.data);
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
};

export default PostsReducer;
