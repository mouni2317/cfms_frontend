import { useNavigate } from "react-router-dom";

import "./ProductCard.css"

export default function ProductCard(props) {
  const { productName, images, description, id, cost } = props;

  const navigate = useNavigate();
  const navigateToDetails = () => navigate(`/product/${id}`);

  let image = "https://www.shutterstock.com/image-vector/no-image-available-sign-absence-600w-373243873.jpg";
  if (images.length) {
    image = images[0];
  }

  return (
    
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt={productName} className="image"/>
      </div>
      <div className="right-container">
        <div className="info">
          <h1>PRODUCT NAME: {productName}</h1>
          <h2>PRODUCT DETAILS: {description}</h2>
          <h2>COST: {cost}</h2>
        </div>
        <div className="buy-button" onClick={navigateToDetails}>BUY NOW</div>
      </div>
    </div>
  );
};