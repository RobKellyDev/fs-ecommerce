import React from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'
import styles from './video.module.css'

const VideoHero = () => (
  <section className={styles.wrapper}>
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <span className="eyebrow fs-4 text-white opacity-50">
        New Collection
      </span>
      <h1 className="display-1 text-white lh-sm fw-bold">
        Spring Jacket.
      </h1>
      <Link
        to=""
        className="btn btn-outline-white text-white fs-5 opacity-50"
      >
        ByBye Collection
      </Link>
    </div>
    <Video />
  </section>
)

export default VideoHero
