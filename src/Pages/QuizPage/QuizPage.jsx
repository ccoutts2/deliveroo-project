import "./QuizPage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function QuizPage() {
  return (
    <main className="quiz-page">
      <div className="quiz-page__header">
        <Link to="/gifts"><img className="quiz-page__back-arrow"src={backArrow}/></Link>
      </div>
      <h3 className="quiz-page__title">Who are you buying a gift for?</h3>
      <Link className="quiz-page__next-page" to="/quiz/occasion">
      <section className="quiz-page__card-container">
      <article className="quiz-page__card quiz-page__card1">Friend</article>
      <article className="quiz-page__card">Family member</article>
      <article className="quiz-page__card quiz-page__card1">Colleague</article>
      <article className="quiz-page__card">Partner</article>
      <article className="quiz-page__card quiz-page__card1">Teen</article>
      <article className="quiz-page__card">Child</article>
      <article className="quiz-page__card">Pet</article>
      </section>
      </Link>
    </main>
  );
}

export default QuizPage;
