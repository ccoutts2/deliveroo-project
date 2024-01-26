import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftsPage from "./pages/GiftsPage/GiftsPage";
import RecipientGiftPage from "./pages/RecipientGiftPage/RecipientGiftPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import OccasionPage from "./pages/OccasionPage/OccasionPage";
import InterestsPage from "./pages/InterestsPage/InterestsPage";
import AgePage from "./pages/AgePage/AgePage";
import StylePage from "./pages/StylePage/StylePage";
import PricePage from "./pages/PricePage/PricePage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gifts" element={<GiftsPage />} />
        <Route path="/recipient-gift" element={<RecipientGiftPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/occasion" element={<OccasionPage />} />
        <Route path="/quiz/interests" element={<InterestsPage />} />
        <Route path="/quiz/age" element={<AgePage />} />
        <Route path="/quiz/style" element={<StylePage />} />
        <Route path="/quiz/price" element={<PricePage />} />
        <Route path="/quiz/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
