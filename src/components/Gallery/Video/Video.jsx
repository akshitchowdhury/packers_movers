import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
  return (
    <div className='video'>
      <ReactPlayer 
        url={url}
        width='250px'
        height='200px'
        playing={true} // Start playing the video automatically
        loop={true} // Set loop to true to play the video continuously
      />
    </div>
  );
}

export default Video;
