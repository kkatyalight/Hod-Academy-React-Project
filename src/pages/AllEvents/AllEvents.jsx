import "../../style.css";
import "../../text-style.css";
import "./AllEvents.css";

import { eventsArticles } from "../../data.js";

import nov_icon25 from "../../assets/25nov_icon.svg";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import OpenDayArticle from "../../components/HomeArticles/OpenDayArticle.jsx";
import EventTemplate from "./EventTemplate.jsx";

export default function AllEvents() {
  return (
    <div>
      <Header theme="dark" />
      <main className="all-events-wrapper side-margins">
        <p className="text-36-bold">Все мероприятия</p>
        <div className="grid">
          <div className="row1-wrapper">
            <OpenDayArticle
              imgSrc={nov_icon25}
              imgAlt="25nov_icon"
              text="День открытых дверей"
              buttonText="Записаться"
              subText="Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и полезных навыков"
            />
          </div>
          {/* <div className="row2-wrapper">
            {eventsArticles.map((info) => (
              <EventTemplate key={info.newsName} {...info} />
            ))}
          </div> */}
           <div className="row2-wrapper">
        <EventTemplate {...eventsArticles[0]} type="simple"/>
        <EventTemplate {...eventsArticles[1]} type="simple"/>
        <EventTemplate {...eventsArticles[2]} type="simple"/>
        </div>
        <div className="row3-wrapper">
        <EventTemplate {...eventsArticles[3]} type="long"/>
        <EventTemplate {...eventsArticles[4]} type="img"/>
        
        </div>
        <div className="row4-wrapper">
        <EventTemplate {...eventsArticles[5]} type="simple"/>
        <EventTemplate {...eventsArticles[6]} type="simple"/>
        <EventTemplate {...eventsArticles[7]} type="simple"/>
        </div>
        </div>

       
      </main>

      <Footer />
    </div>
  );
}
