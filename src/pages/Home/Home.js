import React from 'react'
import styles from './Home.module.css'
import HeroFeature from '../../components/features/HeroFeature/HeroFeature'
import FeaturedProducts from '../../components/features/FeaturedProducts/FeaturedProducts'
import TickerBar from '../../components/features/TickerBar/TickerBar'

const Home = () => {
  return (
    <div>
      <HeroFeature />
      <section className={styles.featuredProducts_SectionOuter}>
        <div className={styles.featuredProducts_SectionInner}>
          <h2 className={styles.featuredProducts_SectionTitle}>Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>
    </div>
  )
}

export default Home
