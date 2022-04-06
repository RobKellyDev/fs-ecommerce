import React from 'react'
import coverGirl from '../../../assets/images/webp/covergirl.webp'
import walkingGirl from '../../../assets/images/videos/walking-girl.mp4'
import styles from './video.module.css'

const Video = () => (
  <video
    poster={coverGirl}
    autoPlay={true}
    muted={true}
    loop={true}
    className={styles.video}
  >
    <source src={walkingGirl} />
  </video>
)

export default Video
