import ButtonArrow from "./ButtonArrow";
export default function ProgramsArticle(props){
    return(     
    <div className="main-general-info-articles-programs shadow">
        <img src={props.imgSrc} alt={props.imgAlt}/>
        <div className="main-general-info-articles-text-center">
            <p className="text-24-med">{props.text}</p>
            <p className="text-16-reg">{props.subText}</p>
        </div>
        <ButtonArrow text={props.buttonText}/>
    </div>);
}