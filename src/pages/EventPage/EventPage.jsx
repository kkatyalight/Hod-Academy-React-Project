import { useParams } from "react-router-dom";
import "./EventPage.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IntroBanner from "../../components/IntroBanner/IntroBanner";
import Advantages from "../../components/Advantages/Advantages.jsx";
import AdvantageEl from "../../components/Advantages/AdvantageEl";
import { eventsArticles, eventInfo } from "../../data";
import SwiperPhoto from "../../components/SwiperPhoto/SwiperPhoto.jsx";
import TextGradientTopBorder from "../../components/TextGradientTopBorder/TextGradientTopBorder.jsx";
import SwiperTeachers from "../../components/SwiperTeachers/SwiperTeachers.jsx";
import Question from "../../components/Question/Question.jsx";
import TextWithHeader from "../../components/TextWithHeader/TextWithHeader.jsx";


export default function EventPage(){
    const params = useParams();
    var eventIndex = eventsArticles.findIndex(
      (event) => event.eventID == params.eventId
    );
    var curEvent = eventsArticles[eventIndex];
    return(
        <>
         <Header theme="light"/>
         <main className="">
        <IntroBanner type="event" {...eventInfo["headerInfo"]} headerWithID={curEvent.eventName}/>

        <div className="side-margins">

        <TextWithHeader
            text=""
            content={
              <Advantages
                content= {eventInfo["goals"].map((info, i) => (
                  <AdvantageEl key={i} {...info} />
                ))}
              />
            }
          />

<TextWithHeader
            text={eventInfo["intermidText1"].h1}
            content={
              <>
              <p className="text-lineh-26 text-18-reg">{eventInfo["intermidText1"].text}</p>
            {eventInfo["program"].map((info,i)=>
            <Question key={i} question={info.header} answer={info.text}/>
            )}
              </>
            }
          />
        </div>

        <SwiperTeachers header='Мероприятие проводят'/>

        <div className="side-margins">

        <TextWithHeader
            text=  {eventInfo["intermidText2"].h1}
            content={
              <p className="text-18-reg text-lineh-26">
              {eventInfo["intermidText2"].text}
            </p>
            }
          />
        </div>

        <SwiperPhoto photos={eventInfo["photoSlides"]} />

       
      </main>
         <Footer />
        </>
       
    );
}