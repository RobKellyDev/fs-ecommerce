import React from 'react';
import coverGirl from '../assets/images/videos/covergirl.png';
import walkingGirl from '../assets/images/videos/walking-girl.mp4';

const Video = () => (
  <video
    poster={coverGirl}
    autoPlay={true}
    muted={true}
    loop={true}
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      objectFit: 'cover'
    }}>
    <source src={walkingGirl} />
  </video>
);

export default Video;
