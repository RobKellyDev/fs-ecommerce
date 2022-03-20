import React from 'react'
import styles from './lineBanner.module.css'

const SingleLineBanner = () => (
  <div className={styles.lineBanner}>
    <small className="eyebrow text-white opacity-75 d-none d-sm-block">
      Limited Time Only -&nbsp;
      <span className={styles.singleLine}>Jacket Only</span> -&nbsp; For Sale
      Now £197
    </small>
  </div>
)

export default SingleLineBanner
