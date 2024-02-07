import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
  return (
    <div className='video'>
      <ReactPlayer 
        url={url}
        width='250px'
        height='200px'
      />
    </div>
  );
}

export default Video;
