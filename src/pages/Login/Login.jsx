import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import owl from "../../assets/owl_login.png";
import "./Login.css";
import FooterIcons from "../../components/Footer/FooterIcons";
import Button from "../../components/Button/Button";
import { loginSocial } from "../../data";
import { useState } from "react";
import AgeList from "../../components/NavCoursesAge/AgeList";

export default function Login() {
  const [gradientBottom, setGradientBottom] = useState("Вход");

  const loginListToggle=(index)=> {
    setGradientBottom(index);
  };
  return (
    <>
      <Header theme="dark" />
      <main className="side-margins">
        <div className="login-wrap grid">
          <ul className="login-choose-option addBottomBorderIfSelected">
          <AgeList 
          onClick={()=>loginListToggle("Вход")}
          text="Вход"
          isSelected={gradientBottom=="Вход"}
          />
          <AgeList 
          onClick={()=>loginListToggle("Регистрация")}
          text="Регистрация"
          isSelected={gradientBottom=="Регистрация"}
          />
           </ul>
          <div className="login-inputs text-14-reg">
            <label>{gradientBottom}</label>
            <input type="text" className="input-login" />
            <input type="text" className="input-login" />
            <input type="text" className="input-login" />
          </div>
          <div className="login-with">
            <p className="text-14-reg">Войти с помощью соцсетей:</p>
            <ul className="login-with-social">
              {loginSocial.map((info) => (
                <FooterIcons key={info.imgAlt} {...info} />
              ))}
            </ul>
            <Button className="button-flex-center" text="Войти" link="" />
          </div>
          <img src={owl} alt="" className="owl-login"/>
        </div>
      </main>
      <Footer />
    </>
  );
}
