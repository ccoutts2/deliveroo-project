import "./StylePage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function StylePage() {
  return (
    <main className="style-page">
      <div className="style-page__header">
        <Link to="/quiz/age"><img className="style-page__back-arrow"src={backArrow}/></Link>
      </div>
      <h3 className="style-page__title">How would you describe their personal style?</h3>
      <Link className="style-page__next-page" to="/quiz/price">
      <section className="style-page__card-container">
      <article className="style-page__card style-page__card1">Classic</article>
      <article className="style-page__card">Trendy</article>
      <article className="style-page__card style-page__card1">Casual</article>
      <article className="style-page__card">Sporty</article>
      <article className="style-page__card style-page__card1">Elegant</article>
      <article className="style-page__card">Behemian</article>
      <article className="style-page__card style-page__card1">Electric</article>
      <article className="style-page__card">Minimalist</article>
      </section>
      </Link>
    </main>
  );
}

export default StylePage;