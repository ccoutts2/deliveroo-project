import "./GiftsHeader.scss";
import giftHeader from "../../assets/images/gift-image.svg";

function GiftsHeader() {
  return (
    <main className="gifts-header">
      <div className="gifts-header__container">
        <img
          className="gifts-header__image"
          src={giftHeader}
          alt="gift-header"></img>
      </div>
    </main>
  );
}

export default GiftsHeader;
