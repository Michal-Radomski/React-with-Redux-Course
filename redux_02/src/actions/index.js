import jsonPlaceholder from "../APIs/jsonPlaceholder";

// //- Wersja 1 - podstawowa
// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({type: "FETCH_POSTS", payload: response});
//   };
// };

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
