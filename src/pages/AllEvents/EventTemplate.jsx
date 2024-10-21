import { Link } from "react-router-dom";
export default function EventTemplate(props) {
  let className = "", headerClass="text-18-med";
  if (props.type == "simple") {
  } else if (props.type == "img") {
    className = "article-event-imgType";
    headerClass="text-24-semibold"
  } else if (props.type == "long") {
    className = "article-event-longType";
  }
  console.log(className);
  return (
    <Link
      to={`/all-events/${props.eventID}`}
      className={`article-event ${props.bgColor} shadow ${className}`}
    >
      {props.bigImgSrc && <img src={props.bigImgSrc} alt={props.imgAlt} />}
      <div className="article-event-text">
        {props.eventType && <p>{props.eventType}</p>}
        <div className="article-course-header">
          {props.imgSrc && <img src={props.imgSrc} alt={props.imgAlt} />}
          <p className={headerClass} >{props.eventName}</p>
        </div>
        <p className="text-lineh-18">{props.eventDescriprion}</p>
        {props.eventTime && <p>{props.eventTime}</p>}
      
      </div>
    </Link>
  );
}
