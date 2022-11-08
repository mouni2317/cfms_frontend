import React, { useEffect, useState } from "react"

import ProductCard from "./ProductCard"
import "./Product.css"
import axios from "axios";




const Product = (props) => {

    const [oneProduct,setProduct] = useState({})
    const [imageUrl,setImageUrl] = useState("")

    

    function print(){
        console.log(oneProduct);
    }

    function loadData(){
      const pathname = window.location.pathname;
      let num = pathname.slice(9)
      num = Number(num);
      console.log(num);
      axios.post('/http://localhost:8080/getProduct/', {
        id: num,        
      })
      .then(function (response) {
        console.log(response.data);
        setProduct(response.data);
        setImageUrl(response.data["images"][0])
      })
      .catch(function (error) {
        console.log(error);
      });
    }
   
    useEffect(() => {
       loadData();
      }, []);

  return (
    <div className="product-page">
        
      {oneProduct!= {} ? 
      <div className=".product-wrapper">
      <div className="product-image">
        <img src={imageUrl} alt={oneProduct["name"]}  className="image"/>
      </div>
      <div className="product-details">
        {/* <div className="info"> */}
          <h1>PRODUCT NAME: {oneProduct["name"]}</h1>
          <h2>PRODUCT DETAILS: {` from ${oneProduct["city"]}`}</h2>
          <h2>COST: {oneProduct["id"]}</h2>
        {/* </div> */}
      </div> 
      
    </div> : <></>}
    <div>
    <label for="emi" ><h2>EMI Period:</h2></label>

<select name="emi" id="emi" className="drop">
  <option value="3">3 months</option>
  <option value="6">6 months</option>
  <option value="9">9 months</option>
  <option value="12">12 months</option>
</select>
    </div>
    <h2>EMI starting from 6000pm!</h2>
    <div className="button-wrapper">
    <div className="pay-button" >PAY NOW</div>
    </div>
    <a href= ""> Terms and Conditions</a>


</div>
    
  )
}

export default Product;