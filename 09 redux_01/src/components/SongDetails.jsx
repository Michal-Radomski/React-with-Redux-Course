import React from "react";
import {connect} from "react-redux";

const SongDetails = ({song}) => {
  // console.log(props);
  if (!song) return <h2>Select a Song</h2>;
  return (
    <>
      <h2>Song Details: </h2>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetails);
