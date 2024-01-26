import "./QuizRouter.scss";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function QuizRouter() {
  return (
    <>
      <div className="quiz-router">
        <div className="quiz-router__left-container">
          <p className="quiz-router__text">Unsure about the perfect gift?</p>
          <p className="quiz-router__text">Try our fast and easy quiz!</p>
        </div>

        <div className="quiz-router__right-container">
          <Link className="quiz-router__button-link" to="./quiz">
            <button className="quiz-router__button">Take Quiz</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default QuizRouter;
