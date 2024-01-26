import "./AgePage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function AgePage() {
  return (
    <main className="age-page">
      <div className="age-page__header">
        <Link to="/quiz/interests"><img className="age-page__back-arrow"src={backArrow}/></Link>
      </div>
      <h3 className="age-page__title">What age group is the recipient?</h3>
      <Link className="age-page__next-page" to="/quiz/style">
      <section className="age-page__card-container">
      <article className="age-page__card age-page__card1">Baby/ Toddler</article>
      <article className="age-page__card">Child (4-12)</article>
      <article className="age-page__card age-page__card1">Teenager</article>
      <article className="age-page__card">Young adult</article>
      <article className="age-page__card age-page__card1">Adult</article>
      <article className="age-page__card">Senior</article>
      </section>
      </Link>
    </main>
  );
}

export default AgePage;