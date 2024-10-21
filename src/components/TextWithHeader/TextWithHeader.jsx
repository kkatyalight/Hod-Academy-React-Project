import "./TextWithHeader.css"

export default function TextWithHeader (props){
    return(
        <section className={`textWithHeader-wrap-flex ${props.className}`}>
        {props.text &&
        <p className="text-36-bold text-lineh-34">{props.text}</p>
    }
        {props.content}
    </section>
    );
}