import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
   <Link className="home-page__link" to="/gifts"> <main className="home-page">
    </main></Link>
  );
}

export default HomePage;
