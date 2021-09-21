import {FETCH_WEATHER} from "../actions";

const weatherReducer = function (state = [], action) {
  // console.log(`Action Received: ${action}`, action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data]; // - [city, city, city]
    default:
      return state;
  }
};

export default weatherReducer;
