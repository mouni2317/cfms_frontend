import React, { useEffect, useState } from "react"

import ProductCard from "./ProductCard"
import "./ProductList.css"

export default function ProductList() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestProducts();
  }, []);

 

  async function requestProducts() {
    setLoading(true);
    const res = await fetch(`http://pets-v2.dev-apis.com/pets`);
    const json = await res.json();

    setLoading(false);
    setProducts(json.pets);
  }

  return (
    <div>
        <div>
        {!products.length && !loading ? (
          <h1>No Products Found</h1>
        ) : (
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                breed={product.breed}
                images={product.images}
                location={`${product.city}, ${product.state}`}
                id={product.id}
              />
            );
          })
        )}
        </div>
      
    </div>

    
  )
}