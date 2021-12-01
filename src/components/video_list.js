import React from "react";
import VideoListItem from "./video_list_item";
import { useSelector, useDispatch } from 'react-redux'

export default function  VideoList ()  {
    
    const videos = useSelector((state) => state.videos)
    const onVideoSelect = useSelector((state) => state.selectedVideo)

    const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

