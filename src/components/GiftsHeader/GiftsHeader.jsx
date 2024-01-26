import "./GiftsHeader.scss";

import gift from "../../assets/images/gift.jpeg";

function GiftsHeader() {
  return (
    <main className="gifts-header">
      <div className="gifts-header__container">
        <img className="gifts-header__background-image" src={gift} />
      </div>
    </main>
  );
}

export default GiftsHeader;
