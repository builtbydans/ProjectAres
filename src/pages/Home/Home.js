import React from 'react'
import styles from './Home.module.css'
import HeroFeature from '../../components/features/HeroFeature/HeroFeature'
import FeaturedProducts from '../../components/features/FeaturedProducts/FeaturedProducts'
import TickerBar from "../../components/features/TickerBar/TickerBar";
import Navbar from "../../components/global/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <TickerBar />
      <Navbar />
      <HeroFeature />
      <section className={styles.featuredProducts_SectionOuter}>
        <div className={styles.featuredProducts_SectionInner}>
          <h2>Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>
    </div>
  )
}

export default Home
