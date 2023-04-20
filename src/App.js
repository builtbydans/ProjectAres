import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { client } from "./lib/client";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sanityQuery = '*[_type == "product"]'

    client.fetch(sanityQuery)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [])

  return (
    <div>
      {products?.map((product) => {
          return <ProductCard key={product._id} product={product} />
        }
      )}
    </div>
  );
}

export default App;
