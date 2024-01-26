import "./ResultPage.scss";
import backArrow from "../../assets/images/back-arrow.jpg"
import { Link } from "react-router-dom";

function ResultPage() {
    return (
        <main className="result-page"><Link to="/gifts"><img className="result-page__back-arrow"src={backArrow}/></Link></main>
    )
}

export default ResultPage;
