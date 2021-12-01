import React from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function  VideoDetail () {
    const video = useSelector((state) => state.selectedVideo)
  if (!video) {
    return <div>Loading...</div>;
  }
 console.log(video)
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={video.snippet.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

