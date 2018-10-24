import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video = {video}/>;
  });
  return(
    <ul>
      {videoItems}
    </ul>
  );
}

export default VideoList;
