import { urlFor } from '../../../lib/client';
import { Link } from "react-router-dom";
import styles from './ProductCard.module.css'

const ProductCard = ({ product: {name, image, slug, price, description} }) => {

  const mainImage = urlFor(image && image[0]);

  return (
    <div className={styles.container}>
      <Link to={`/products/${slug.current}`}>
        <div>
          <img
            src={mainImage}
            onMouseOver={(e) => e.currentTarget.src = urlFor(image && image[1])}
            onMouseOut={(e) => e.currentTarget.src = mainImage}
            alt="boot_name"
          />
        </div>
      </Link>
      <div>
        <p>{name}</p>
        <p>£{price}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductCard;
