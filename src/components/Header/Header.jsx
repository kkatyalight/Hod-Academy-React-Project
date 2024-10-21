//при смене темы иконки которые не импортированы не отображаются
//моя красивая схема добавления _white в строку не работат( нужен импорт

import "./Header.css";
import HeaderHrefs from "./HeaderHrefs.jsx";
import { headerInfo, cities } from "../../data.js";

import logo from "../../assets/logo_text.svg";
import logoWhite from "../../assets/logo_text_white.svg";
import close from "../../assets/close.svg";

import { Link } from "react-router-dom";
import { useState } from "react";


export default function Header({ theme }) {
  const [city, setCity] = useState("Минск");
  const [isActive, setIsActive] = useState(false);

  const openList = () => {
    setIsActive(!isActive);
  }
//   const chooseCity = (parameter) => (event) => {
//     // Do something
// }

  let background_color, text_color, logo_src, arrowSrcKey, iconSrcKey;

  if (theme == "light") {
    background_color = "light-mode";
    text_color = "text-black";
    logo_src = logo;
    iconSrcKey="imgSrc";
    arrowSrcKey="arrow";
    
  } else if (theme == "dark") {
    background_color = "dark-mode";
    text_color = "text-white";
    logo_src = logoWhite;
    iconSrcKey="imgSrcWhite";
    arrowSrcKey="arrowWhite";
  }

  return (
    <>
      <header className={`${background_color} header`}>
        <div className={`header-info text-14-med ${text_color}`}>
          <Link to="/">
            <img src={logo_src} alt="logo_text" />
          </Link>

          <div className="header-info-list text14">
            <HeaderHrefs {...headerInfo[0]} iconColor={iconSrcKey} />
            <HeaderHrefs {...headerInfo[1]} iconColor={iconSrcKey} />
            <HeaderHrefs {...headerInfo[2]} iconColor={iconSrcKey} />
            <HeaderHrefs {...headerInfo[3]} iconColor={iconSrcKey} />
          </div>
          <div className="header-info-list text14">
            {/* <HeaderHrefs {...headerInfo[4]} iconColor={icon_color} onClick={openList} /> */}

            <Link className={headerInfo[4].className} onClick={openList}>
              <img src={headerInfo[4][iconSrcKey]} alt={headerInfo[4].imgAlt} />
              <p>{city}</p>
              <img className={`arrow ${isActive ? "arrowActive" : ""}`} src={headerInfo[4][arrowSrcKey]} alt="arrow" />
            </Link>

            <HeaderHrefs {...headerInfo[5]} iconColor={iconSrcKey} />
            <HeaderHrefs {...headerInfo[6]} iconColor={iconSrcKey} />
          </div>
        </div>
    

{/* <div className="open-list-wrapper side-margins">
 <div  className={`open-list ${isActive ? "active" : "inactive"}`}>Hello</div>
</div> */}
      </header>
      <>
{isActive &&
 <div className={`side-margins open-list-wrapper`}>
  <div className="cities-list-header">
  <p className="text-24-semibold">Выберите свой город</p>
  <img onClick={openList} src={close} alt="close" />
  </div>

 <ul className="cities-list text-14-reg">
{
  cities.map((info)=>
    <li onClick={() => {setCity(info); }}>{...info}</li>
  )
}
 </ul>
  </div>
}

 {/* <div className={`side-margins open-list-wrapper ${isActive ? "active" : ""}`}>

  <p>hello</p>
  <p>  HELLO</p>
  </div> */}


</>   

    </>
  );
}
