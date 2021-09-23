import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const rootURL = "https://reduxblog.herokuapp.com/api";
const apiKEY = "?key=123";

export function fetchPosts() {
  const request = axios.get(`${rootURL}/posts${apiKEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${rootURL}/posts${apiKEY}`, values).then(() => callback());
  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${rootURL}/posts/${id}${apiKEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id, callback) {
  // eslint-disable-next-line no-unused-vars
  const request = axios.delete(`${rootURL}/posts/${id}${apiKEY}`).then(() => callback());
  return {
    type: DELETE_POST,
    payload: id,
  };
}
