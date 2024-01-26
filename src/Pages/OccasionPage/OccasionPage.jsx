import "./OccasionPage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function OccasionPage() {
  return (
    <main className="occasion-page">
      <div className="occasion-page__header">
        <Link to="/quiz"><img className="occasion-page__back-arrow"src={backArrow}/></Link>
      </div>
      <h3 className="occasion-page__title">Occasion?</h3>
      <Link className="occasion-page__next-page" to="/quiz/interests">
      <section className="occasion-page__card-container">
      <article className="occasion-page__card occasion-page__card1">Birthday</article>
      <article className="occasion-page__card">Anniversary</article>
      <article className="occasion-page__card occasion-page__card1">Graduation</article>
      <article className="occasion-page__card">Housewarming</article>
      <article className="occasion-page__card occasion-page__card1">Get well soon</article>
      <article className="occasion-page__card">Retirement</article>
      <article className="occasion-page__card occasion-page__card1">Holiday</article>
      <article className="occasion-page__card">No special occasion</article>
      </section>
      </Link>
    </main>
  );
}

export default OccasionPage;
