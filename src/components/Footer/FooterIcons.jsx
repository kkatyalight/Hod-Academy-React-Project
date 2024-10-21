import { Link } from "react-router-dom"

export default function FooterIcons(props){
    return(
        <li>
            <Link>
            <img src={props.imgSrc} alt={props.imgAlt}/>
            </Link>
    </li>
    );
}