import { useState, useEffect } from 'react'
import { client } from '../../../lib/client'
import styles from './FeaturedProducts.module.css'
import ProductCard from '../ProductCard/ProductCard'

const FeaturedProducts = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const sanityQuery = '*[_type == "product"]'

    client.fetch(sanityQuery)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [])

  return (
    <section className={styles.featuredProducts_Container}>
      {products?.slice(0, 3).map((product) => {
        return <ProductCard key={product._id} product={product}  />
      })}
    </section>
  )
}

export default FeaturedProducts
