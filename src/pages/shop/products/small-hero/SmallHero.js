import React from 'react'
// images
import heroCycling from '../../../../assets/images/webp/hero-cycling.webp'
import styles from './smallhero.module.css'

const SmallHero = () => (
  <img
    src={heroCycling}
    width={2048}
    height={268}
    alt={"Sale banner"}
    className={`${styles.smallHero}`}
  />
)

export default SmallHero
