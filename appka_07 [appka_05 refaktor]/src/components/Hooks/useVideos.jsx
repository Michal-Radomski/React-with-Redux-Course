import React from "react";
import youtube from "../../APIs/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = React.useState([]);
  React.useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
