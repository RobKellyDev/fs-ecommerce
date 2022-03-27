import React from 'react'
import styles from './smallhero.module.css'

const SmallHero = (image) => (
  <img
    src={image.banner}
    width={image.width}
    height={image.height}
    alt={image.alt}
    className={`${styles.smallHero}`}
  />
)

export default SmallHero
