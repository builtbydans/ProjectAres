import { urlFor } from '../lib/client';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
  max-width: 400px;
`;

const ProductCard = ({ product: {name, image, slug, price} }) => {

  const mainImage = urlFor(image && image[0]);

  return (
    <StyledCard>
      <Link to={`/products/${slug.current}`}>
        <img
          src={mainImage}
          onMouseOver={(e) => e.currentTarget.src = urlFor(image && image[1])}
          onMouseOut={(e) => e.currentTarget.src = mainImage}
          height={350}
          alt="boot_name"
        />
      </Link>
      <p>{name}</p>
      <p>£{price}</p>
    </StyledCard>
  )
}

export default ProductCard;
