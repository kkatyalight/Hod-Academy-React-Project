import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderHrefs(props, {onClick}) {
  // const [coursesName, setCoursesName] = useState(null);


  let imgSrc = props.imgSrc;
  let arrow = props.arrow;
  if (props.iconColor == "#ffffff") {
    if (props.imgSrc)
      imgSrc = props.imgSrc?.slice(0, -4) + "_white" + props.imgSrc?.slice(-4);
    if (props.arrow)
      arrow = props.arrow?.slice(0, -4) + "_white" + props.arrow?.slice(-4);
  }

  return (
    <>

{/* <Link to={props.href} className={props.className}>
          {props.imgSrc && <img src={imgSrc} alt={props.imgAlt} />}
          <p>{props.text}</p>
        </Link> */}
      {!props.arrow && (
        <Link to={props.href} className={props.className}>
          {props.imgSrc && <img src={imgSrc} alt={props.imgAlt} />}
          <p>{props.text}</p>
        </Link>
      )}

      {props.arrow && (
        <div className={props.className} onClick={openList}>
          {props.imgSrc && <img src={imgSrc} alt={props.imgAlt} />}
          <p>{props.text}</p>
          <img src={arrow} alt="arrow" />
        </div>
      )}
    </>
  );
}
