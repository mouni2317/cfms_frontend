import React, { useEffect, useState } from "react"
import "./Product.css"
import axios from "axios";
import { apiUrl } from "./constants";
import { useNavigate } from "react-router-dom";


const Product = (props) => {

  const [oneProduct,setProduct] = useState({});
  const [tenure, setTenure] = useState(3);
  const navigate = useNavigate();

  function loadData(){
    const pathname = window.location.pathname;
    let num = pathname.slice(9)
    num = Number(num);
    axios.post(apiUrl + '/getProduct/', {
      productId: num,        
    })
    .then(function (response) {
      setProduct(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  useEffect(() => {
      loadData();
    }, []);
  
  const handleSubmit = () => {
    axios.post(apiUrl + '/purchase', {
      userId: parseInt(sessionStorage.getItem('userId')),
      productId: oneProduct["id"],
      numberOfEmis: parseInt(tenure)
    })
    .then(function (response) {
      alert(oneProduct["productName"] + " purchased at a tenure of " + tenure + " months!");
      navigate('/productList')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="product-page">
        
      {oneProduct !== {} ? 
      <div className=".product-wrapper">
      <div className="product-image">
        <img src={oneProduct["image"]} alt={oneProduct["productName"]}  className="image"/>
      </div>
      <div className="product-details">
        {/* <div className="info"> */}
          <h1>PRODUCT NAME: {oneProduct["productName"]}</h1>
          <h2>PRODUCT DETAILS: {` from ${oneProduct["description"]}`}</h2>
          <h2>COST: {oneProduct["cost"]}</h2>
        {/* </div> */}
      </div> 
      
    </div> : <></>}
    <div>
    <label for="emi" ><h2>EMI Period:</h2></label>

<select name="emi" id="emi" className="drop" value={tenure} onChange={e => setTenure(e.target.value)}>
  <option value="3">3 months</option>
  <option value="6">6 months</option>
  <option value="9">9 months</option>
  <option value="12">12 months</option>
</select>
    </div>
    <h2>EMI starting from {Math.ceil(oneProduct["cost"]/12)}rs pm!</h2>
    <div className="button-wrapper">
    <div className="pay-button" onClick={handleSubmit}>PAY NOW</div>
    </div>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href= ""> Terms and Conditions</a>


</div>
    
  )
}

export default Product;