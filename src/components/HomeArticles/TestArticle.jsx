
export default function TestArticle(props){
    return(     
        <a className="main-general-info-articles-test shadow" href={props.href}>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <div className="main-general-info-articles-text">
          <p className="text-24-med">{props.text}</p>
          <p className="text-16reg">
          {props.subText}
          </p>
        </div>
      </a>
      );
}