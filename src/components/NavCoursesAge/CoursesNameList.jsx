import { Link } from "react-router-dom";

export default function CoursesNameList(props) { 
    return (
        <Link to={`/all-courses/${props.courseID}`}>
        <li className="shadow">{props.text}</li>
        </Link>
    );
  }