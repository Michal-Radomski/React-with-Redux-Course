import {combineReducers} from "redux";
import reducerBooks from "./reducerBooks";
import activeBook from "./activeBookReducer";

const rootReducer = combineReducers({
  books: reducerBooks,
  activeBook: activeBook,
});

export default rootReducer;
