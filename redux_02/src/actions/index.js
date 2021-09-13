import _ from "lodash";
import jsonPlaceholder from "../APIs/jsonPlaceholder";

// //- Wersja 1 - podstawowa
// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({type: "FETCH_POSTS", payload: response});
//   };
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //- Wersja alternatywna poniżej
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  //- Wersja alternatywna - tego co wyżej
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

//- Wersja 1A - równoważna -> skrócona
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({type: "FETCH_POSTS", payload: response.data});
};

// //- Totally fine!
// export const selectPosts = () => {
//   return {
//     type: "SELECT_POST"
//   }
// }

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: "FETCH_USER", payload: response.data});
};

// //+ WERSJA Z LODASH !!!
// //- Wersja 1
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUsers(id, dispatch);
// };
// //- Wersja 2 -  to samo co wyżej - napisana w jednej linii
// export const fetchUser = (id) => (dispatch) => _fetchUsers(id, dispatch);

// const _fetchUsers = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: "FETCH_USER", payload: response.data});
// });
