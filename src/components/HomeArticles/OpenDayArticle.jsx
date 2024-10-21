import ButtonArrow from "./ButtonArrow";
export default function OpenDayArticle(props){
    return(
        <div className="main-general-info-articles-openday">
        <img src={props.imgSrc} alt={props.imgAlt}/>
        <div className="main-general-info-articles-text">
            <p className="text-36-med">{props.text}</p>
            <p className="text-18-reg">{props.subText}</p>
        </div>
       <ButtonArrow text={props.buttonText}/>
    </div>
    );
}