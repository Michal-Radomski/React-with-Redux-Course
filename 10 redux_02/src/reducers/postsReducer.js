const postsReducer = (state = [], action) => {
  // //- Wariant z IF
  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }
  // return state;

  //- Wariant ze Switch
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
