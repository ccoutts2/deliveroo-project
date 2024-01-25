import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GiftsPage from "./pages/GiftsPage/GiftsPage";
import RecipientGiftPage from "./pages/RecipientGiftPage/RecipientGiftPage";
import QuizPage from "./pages/QuizPage/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gifts" element={<GiftsPage />} />
        <Route path="/recipient-gift" element={<RecipientGiftPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
