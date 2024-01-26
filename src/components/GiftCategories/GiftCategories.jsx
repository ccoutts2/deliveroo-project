import "./GiftCategories.scss";
import { Link, useNavigate } from "react-router-dom";
import recipient1 from "../../assets/images/recipient1.svg";
import recipient2 from "../../assets/images/recipient2.svg";
import recipient3 from "../../assets/images/recipient3.svg";
import recipient4 from "../../assets/images/recipient4.svg";
import recipient5 from "../../assets/images/recipient5.svg";
import recipient6 from "../../assets/images/recipient6.svg";
import recipient7 from "../../assets/images/recipient7.svg";
import occasion1 from "../../assets/images/occasion1.svg";
import price1 from "../../assets/images/price1.svg";

function GiftCategories({ title, image, details }) {
  return (
    <>
      <div className="gift-categories">
        <div className="gift-categories-section">
          <h3 className="gift-categories__title">Recipient:</h3>
          <div className="gift-categories__list">
            <img className="gift-categories__image" src={recipient1}></img>
            <img className="gift-categories__image" src={recipient2}></img>
            <img className="gift-categories__image" src={recipient3}></img>
            <img className="gift-categories__image" src={recipient4}></img>
            <img className="gift-categories__image" src={recipient5}></img>
            <img className="gift-categories__image" src={recipient6}></img>
            <img className="gift-categories__image" src={recipient7}></img>
          </div>
        </div>
        <div className="gift-categories-section">
          <h3 className="gift-categories__title">Occasion:</h3>
          <div className="gift-categories__scroll">
            <img className="gift-categories__image" src={occasion1}></img>
          </div>
        </div>
        <div className="gift-categories-section">
          <h3 className="gift-categories__title">Price:</h3>
          <div className="gift-categories__scroll">
            <img className="gift-categories__image" src={price1}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiftCategories;
