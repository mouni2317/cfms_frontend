import React, { useEffect, useState } from "react"

import ProductCard from "./ProductCard"
import "./Product.css"


const singleProduct ={
    "id": 1,
    "name": "Luna",
    "animal": "dog",
    "city": "Seattle",
    "state": "WA",
    "description": "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
    "breed": "Havanese",
    "images": [
      "http://pets-images.dev-apis.com/pets/dog25.jpg",
      "http://pets-images.dev-apis.com/pets/dog26.jpg",
      "http://pets-images.dev-apis.com/pets/dog27.jpg",
      "http://pets-images.dev-apis.com/pets/dog28.jpg",
      "http://pets-images.dev-apis.com/pets/dog29.jpg"
    ]
  }


const Product = (props) => {

    const [oneProduct,setProduct] = useState({})
    const [imageUrl,setImageUrl] = useState("")

    

    function print(){
        console.log(oneProduct);
    }

   
    useEffect(() => {
        const pathname = window.location.pathname;
        let num = pathname.slice(9)
        num = Number(num);
        console.log(num);
        setProduct(singleProduct);
        if(singleProduct["images"][0]){
            setImageUrl(singleProduct["images"][0]);
        }
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
    <a href= "/"> Terms and Conditions</a>


</div>
    
  )
}

export default Product;