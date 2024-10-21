import nov_icon25 from "../../assets/25nov_icon.svg";
import programs_icon from "../../assets/programs_icon.svg";
import news_icon from "../../assets/news_icon.svg";
import itworld_icon from "../../assets/itworld_icon.svg";
import try_icon from "../../assets/try_icon.svg";

import "./HomeArticles.css";
import OpenDayArticle from "./OpenDayArticle";
import ProgramsArticle from "./ProgramsArticle";
import SmallArticle from "./SmallArcicle";
import TestArticle from "./TestArticle";
export default function HomeArticles() {
  return (
    <div className="main-general-info-articles text-black">
      <OpenDayArticle
        imgSrc={nov_icon25}
        imgAlt="25nov_icon"
        text="День открытых дверей"
        buttonText="Записаться"
        subText="Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и полезных навыков"
      />
      <ProgramsArticle 
        imgSrc={programs_icon}
        imgAlt="programs_icon"
        text="Программы обучения"
        buttonText="Подробнее"
        subText="В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты."/>

      <div className="main-general-info-articles-add-flow">
      <SmallArticle
       imgSrc={news_icon}
       imgAlt="news_icon"
       text="Новости Академии"
       href="/"
       className="main-general-info-articles-news"
       />
       <SmallArticle
       imgSrc={itworld_icon}
       imgAlt="itworld_icon"
       text="Мир IT"
       href="/"
       className="main-general-info-articles-itworld"
       />
      </div>
      <TestArticle
       imgSrc={try_icon}
       imgAlt="try_icon"
       text="Попробуй!"
       href="/"
       subText="Пройдите тест и узнайте свои способности в сфере информационных
            технологий"
       />      
    </div>
  );
}
