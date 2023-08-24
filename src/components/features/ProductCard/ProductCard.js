import React from 'react'
import { urlFor } from '../../../lib/client';
import { Link } from "react-router-dom";
import styles from './ProductCard.module.css'

const ProductCard = ({ product: {slug, name, image, description, price} }) => {

  const mainImage = urlFor(image && image[0]);

  return (
    <article className={styles.productCard}>
      <Link to={`/products/${slug.current}`}>
        <div className={styles.productCard_ImgContainer}>
          <img
            className={styles.productCard_Img}
            src={mainImage}
            onMouseOver={(e) => e.currentTarget.src = urlFor(image && image[1])}
            onMouseOut={(e) => e.currentTarget.src = mainImage}
            alt=""
          />
        </div>
        <div className={styles.productCard_Details}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>£{price}</p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
