import { useEffect, useState } from "react";
import { client } from "./lib/client";
import Navbar from "./components/global/Navbar/Navbar";

const App = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const sanityQuery = '*[_type == "product"]'

    client.fetch(sanityQuery)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [])

  return (
    <div style={{maxWidth: '85%', margin: '0 auto'}}>
      <Navbar />
    </div>
  );
}

export default App;
