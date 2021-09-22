import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

const rootURL = "https://reduxblog.herokuapp.com/api";
const apiKEY = "?key=123";

export function fetchPosts() {
  const request = axios.get(`${rootURL}/posts${apiKEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
