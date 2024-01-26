import GiftCategories from "../../components/GiftCategories/GiftCategories";
import GiftsHeader from "../../components/GiftsHeader/GiftsHeader";
import QuizRouter from "../../components/QuizRouter/QuizRouter";
import "./GiftsPage.scss";

function GiftsPage() {
  return (
    <main className="gifts-page">
      <div className="gifts-page__container">
        <GiftsHeader />
        <QuizRouter />
        <GiftCategories />
      </div>
    </main>
  );
}

export default GiftsPage;
