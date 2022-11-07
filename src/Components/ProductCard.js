import { useNavigate } from "react-router-dom";

import "./ProductCard.css"

export default function ProductCard(props) {
  const { name, breed, images, location, id } = props;

  const navigate = useNavigate();
  const navigateToDetails = () => navigate('/login');

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    
    <div className="card-container">
      <div className="image-container">
        <img src={hero} alt={name} className="image"/>
      </div>
      <div className="right-container">
        <div className="info">
          <h1>PRODUCT NAME: {name}</h1>
          <h2>PRODUCT DETAILS: {`${breed} from ${location}`}</h2>
          <h2>COST: {id}</h2>
        </div>
        <div className="buy-button" onClick={navigateToDetails}>BUY NOW</div>
      </div>
    </div>
  );
};