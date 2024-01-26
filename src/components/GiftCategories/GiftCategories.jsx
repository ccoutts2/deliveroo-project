import "./GiftCategories.scss";
import { Link, useNavigate } from "react-router-dom";

function GiftCategories({ title, image, details }) {
  return (
    <>
      <div className="gift-categories">
        <h3 className="gift-categories__title">Recipient:</h3>
        <div className="gift-categories__container">
          <img className="gift-categories__image"></img>
          <h2 className="gift-categories__details">For Him</h2>
        </div>
      </div>
    </>
  );
}

export default GiftCategories;
