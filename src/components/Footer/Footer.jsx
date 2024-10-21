import './Footer.css'
import logo from '../../assets/logo_text_white.svg';
import {footerInfoChildren, footerInfoTeens, footerInfoAdults, footerInfoUs, footerSocial} from "../../data.js";
import FooterList from "./FooterList.jsx";
import FooterIcons from "./FooterIcons.jsx";
import { Link } from 'react-router-dom';

export default function Footer(){
return( 
<footer className="footer text-white">
    <div className="footer-us">
        <Link to="/">
        <img src={logo} alt=""/>
        </Link>
        <ul className="footer-us-contacts">
            <li>
                <a className="text-18-semibold" href="tel:88009503398">8 800 950-33-98</a>
            </li>
            <li>
                <p className="text-14-med">г. Москва, ул. Ленина, д.50</p>
            </li>
            <li>
                <p className="text-14-med">info@hodfutureacademy.ru</p>
            </li>
        </ul>
        <ul className="footer-us-social">
        {footerSocial.map(info=><FooterIcons key = {info.imgAlt} {...info}/>)}
        </ul>
        <p className="text-12-reg text-grey4">© ХОД, Future Academy</p>
    </div>
    <div className="footer-lists text-14-reg">
        <ul>
        {footerInfoChildren.map(info=><FooterList key = {info.text} {...info}/>)}
        </ul>
    </div>
    <div className="footer-lists text-14-reg">
        <ul>
        {footerInfoTeens.map(info=><FooterList key = {info.text} {...info}/>)}
        </ul>
    </div>
    <div className="footer-lists text-14-reg">
        <ul>
        {footerInfoAdults.map(info=><FooterList key = {info.text} {...info}/>)}
        </ul>
    </div>
    <div className="footer-lists text-14-reg">
        <ul>
        {footerInfoUs.map(info=><FooterList key = {info.text} {...info}/>)}
        </ul>
    </div>
</footer>
);
}