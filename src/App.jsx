import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftsPage from "./pages/GiftsPage/GiftsPage";
import RecipientGiftPage from "./pages/RecipientGiftPage/RecipientGiftPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import OccasionPage from "./pages/OccasionPage/OccasionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gifts" element={<GiftsPage />} />
        <Route path="/recipient-gift" element={<RecipientGiftPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/occasion" element={<OccasionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
