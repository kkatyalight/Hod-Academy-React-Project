import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ text, link, className }) {
  return (
    <Link to={link} className={`${className}`}>
        <span>
        <button className={`button text-14-bold`}>{text}</button>
        </span>
     
    </Link>
  );
}
