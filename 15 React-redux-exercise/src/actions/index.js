import {API_KEY} from "../config";
import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);
  // console.log(`Request: ${request}`, request);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
