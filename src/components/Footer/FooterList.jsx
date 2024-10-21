import { Link } from "react-router-dom";

export default function FooterList(props){
    return(
        <li className={props.className}>
            {/* <Link to={props.href}>{props.text}</Link> */}
            <Link>{props.text}</Link>
            </li>
    );
}