import React from 'react'
import styles from './HeroFeature.module.css'

const HeroFeature = () => {
  return (
    <div className={styles.heroMain}>
      <div className={styles.heroLeft}>
        <h1>The Future of The Nike Dunk Low</h1>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroRightImageOne}>
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2022/7/WW/HK/NA/35945583/product-jpeg.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.heroRightImageTwo}>
          <img
            src="https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_3.65/0a578682-4ce2-4bec-9c76-1a2e754f918a/dunk-low-retro-shoe-QgD9Gv.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.heroRightImageThree}>
          <img
            src="https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_4.91/5e6845cb-43dd-4106-b572-25f427243445/dunk-high-womens-shoes-PXHcGT.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  )
}

export default HeroFeature
