import "./PricePage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function PricePage() {
  return (
    <main className="price-page">
      <div className="price-page__header">
        <Link to="/quiz/style"><img className="price-page__back-arrow"src={backArrow}/></Link>
      </div>
      <h3 className="price-page__title">What is your price range?</h3>
      <Link className="price-page__next-page" to="/quiz/result">
      <section className="price-page__card-container">
      <article className="price-page__card price-page__card1">Under £25</article>
      <article className="price-page__card">£25-50</article>
      <article className="price-page__card price-page__card1">£50-100</article>
      <article className="price-page__card">£100-200</article>
      <article className="price-page__card price-page__card1">£200+</article>
      </section>
      </Link>
    </main>
  );
}

export default PricePage;