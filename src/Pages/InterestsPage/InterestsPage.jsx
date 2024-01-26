import "./InterestsPage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function InterestsPage() {
  return (
    <main className="interests-page">
      <div className="interests-page__header">
        <Link to="/quiz/occasion"><img className="interests-page__back-arrow"src={backArrow}/></Link>
      </div>
      <h3 className="interests-page__title">What are the recipients interests?</h3>
      <Link className="interests-page__next-page" to="/quiz/age">
      <section className="interests-page__card-container">
      <article className="interests-page__card interests-page__card1">Technology</article>
      <article className="interests-page__card">Reading</article>
      <article className="interests-page__card interests-page__card1">Cooking</article>
      <article className="interests-page__card">Sports</article>
      <article className="interests-page__card interests-page__card1">Music</article>
      <article className="interests-page__card">Art</article>
      <article className="interests-page__card interests-page__card1">Travel</article>
      <article className="interests-page__card">Gaming</article>
      <article className="interests-page__card interests-page__card1">Self care</article>
      <article className="interests-page__card">Fashion</article>
      </section>
      </Link>
    </main>
  );
}

export default InterestsPage;