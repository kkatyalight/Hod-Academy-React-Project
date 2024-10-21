import { Link } from "react-router-dom";

export default function CourseArticle(props) {
  return (
    <Link to={`/all-courses/${props.courseID}`} className={`article-course ${props.bgColor} shadow`}>
      <p>{props.courseType}</p>
      <div className="article-course-header">
        <img src={props.imgSrc} alt={props.imgAlt} />
        <p className="text-18-med">{props.courseName}</p>
      </div>
      <p className="text-lineh-18">{props.courseDescriprion}</p>
      <p>{props.courseTime}</p>
    </Link>
  );
} 
