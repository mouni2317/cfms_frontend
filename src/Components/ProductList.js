import React, { useEffect, useState } from "react"
import { apiUrl } from "./constants";

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
    const res = await fetch(apiUrl + `/getAllProducts`);
    const json = await res.json();

    setLoading(false);
    setProducts(json);
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
                productName={product.productName}
                images={product.image}
                description={product.description}
                id={product.id}
                cost = {product.cost}
              />
            );
          })
        )}
        </div>
      
    </div>

    
  )
}