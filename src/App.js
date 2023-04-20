import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { client } from "./lib/client";

function App() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const sanityQuery = '*[_type == "product"]'

    client.fetch(sanityQuery)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [])

  return (
    <div className="container" style={{maxWidth: '1400px'}}>
      <img className="mt-3" src="ares-logo.png" alt="ares-logo" height={25} />

      <div className="mt-4 d-flex justify-content-between">
        {products?.map((product) => {
            return <ProductCard key={product._id} product={product} />
          }
        )}
      </div>
    </div>
  );
}

export default App;
