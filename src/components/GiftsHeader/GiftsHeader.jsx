import "./GiftsHeader.scss";
import gift from "../../assets/images/gift.jpeg";
import { Link } from "react-router-dom";

function GiftsHeader() {
  return (
    <main className="gifts-header">
      <div className="gifts-header__container">
        <Link to="/"><img className="gifts-header__background-image" src={gift} /></Link>
      </div>
    </main>
  );
}

export default GiftsHeader;
