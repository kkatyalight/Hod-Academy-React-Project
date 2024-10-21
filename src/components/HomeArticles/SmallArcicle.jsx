
export default function SmallArticle(props){
    return(     
        <a className={`${props.className} shadow`} href={props.href}>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <div className="main-general-info-articles-text">
          <p className="text-24-med">{props.text}</p>
        </div>
      </a>
      );
}