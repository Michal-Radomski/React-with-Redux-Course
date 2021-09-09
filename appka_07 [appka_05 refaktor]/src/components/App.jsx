import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [videos, search] = useVideos("Shakira");

  React.useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />I have {videos.length} videos.
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} /> */}
            {/* //- Niżej to samo co wyżej */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
