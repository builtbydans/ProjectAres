import { urlFor } from '../lib/client';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
  border: none;
`;

const ImgContainer = styled.div`
  height: 285px;
`

const ProductImg = styled.img`
  height: 100%;
`

const ProductCard = ({ product: {name, image, slug, price} }) => {

  const mainImage = urlFor(image && image[0]);

  return (
    <StyledCard>
      <Link to={`/products/${slug.current}`}>
        <ImgContainer>
          <ProductImg
            src={mainImage}
            onMouseOver={(e) => e.currentTarget.src = urlFor(image && image[1])}
            onMouseOut={(e) => e.currentTarget.src = mainImage}
            alt="boot_name"
          />
        </ImgContainer>
      </Link>
      <div>
        <p>{name}</p>
        <p>£{price}</p>
      </div>
    </StyledCard>
  )
}

export default ProductCard;
