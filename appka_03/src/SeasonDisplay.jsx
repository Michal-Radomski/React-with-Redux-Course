import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's go to the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(props);
  const season = getSeason(props.lat, new Date().getMonth());
  // console.log(season);
  const {text, iconName} = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`iconLeft massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`iconRight massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
