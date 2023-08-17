import React from 'react'
import styles from './Home.module.css'
import HeroFeature from '../../components/features/HeroFeature/HeroFeature'
import FeaturedProducts from '../../components/features/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div>
      <HeroFeature />
      <FeaturedProducts />
    </div>
  )
}

export default Home
