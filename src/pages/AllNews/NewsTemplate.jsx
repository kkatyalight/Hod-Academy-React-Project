import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg"

export default function NewsTemplate(props) {
  return (

    <Link to ={`/all-news/${props.newsID}`} className="news-template shadow">
    <img src={props.imgSrc} alt={props.imgAlt} />
      <ul className="news-template-text">
        <li className="text-12-reg">{props.date}</li>
        <li className="text-18-med">{props.header}</li>
        <li className="text-12-reg text-lineh-18">{props.shortText}</li>
        <li className="news-arrow text-14-med">
          <p>Подробнее</p> 
          <img src={arrow} alt="arrow" />
        </li>
      </ul>
    </Link>
  );
}
