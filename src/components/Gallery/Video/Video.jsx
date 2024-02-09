import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
  return (
    <div className='video'>
      <ReactPlayer 
        url={url}
        width='250px'
        height='200px'
        playing={true} // Set playing to true to start playing the video automatically
        loop= {true}

      />
    </div>
  );
}

export default Video;
