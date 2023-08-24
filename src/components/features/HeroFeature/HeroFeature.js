import React from 'react'
import styles from './HeroFeature.module.css'

const HeroFeature = () => {
  return (
    <div className={styles.hero_Container}>

      <section className={styles.hero_Left}>
        <h1 className={styles.hero_Title}>The Nike Dunk Low Panda 2.0</h1>
        <h2
          className={styles.hero_Subtitle}>
          Created for the hardwood but taken to the streets, the Dunk returns
          with classic details and throwback hoops style.
        </h2>
        <a href="/">
          <button className={styles.hero_Btn}>Sign Up For Launch Day</button>
        </a>
      </section>

      <aside className={styles.hero_Right}>
        <div className={styles.hero_RightImageOne}>
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2022/7/WW/HK/NA/35945583/product-jpeg.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className={styles.hero_RightImageTwo}>
          <img
            src="https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_3.65/0a578682-4ce2-4bec-9c76-1a2e754f918a/dunk-low-retro-shoe-QgD9Gv.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className={styles.hero_RightImageThree}>
          <img
            src="https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_4.91/5e6845cb-43dd-4106-b572-25f427243445/dunk-high-womens-shoes-PXHcGT.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </aside>

    </div>
  )
}

export default HeroFeature
