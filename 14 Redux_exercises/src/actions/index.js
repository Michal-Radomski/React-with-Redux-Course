export const selectBook = (book) => {
  // selectBook is and action creator, it needs to return an action -> an object with a type property
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
};
