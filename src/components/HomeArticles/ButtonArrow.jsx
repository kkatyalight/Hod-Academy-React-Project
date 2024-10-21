import { Link } from "react-router-dom";
import arrow from "../../assets/arrow_list_icon.svg";
export default function ButtonArrow(props) {
  return (
    <Link className="articles-button">
    <p className="text-14-med">{props.text}</p>
    <img src={arrow} alt="arrow" />
    </Link>
  );
}
