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
    const res = await fetch(`http://localhost:8080/cfms/getAllProducts`);
    const json = await res.json();

    setLoading(false);
    setProducts(json.products);
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
                key={product.productId}
                productName={product.productName}
                images={product.images}
                description={product.description}
                id={product.productId}
                cost = {product.cost}
              />
            );
          })
        )}
        </div>
      
    </div>

    
  )
}