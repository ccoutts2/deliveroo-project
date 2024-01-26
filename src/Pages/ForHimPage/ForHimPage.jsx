import "./ForHimPage.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/back-arrow.jpg"

function ForHimPage() {
    return (
        <main className="for-him-page"><Link to="/gifts"><img className="result-page__back-arrow"src={backArrow}/></Link></main>
    )
}

export default ForHimPage;