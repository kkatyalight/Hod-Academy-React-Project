import "../../style.css";
import "../../text-style.css";
import "./AboutUs.css";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import IntroBanner from "../../components/IntroBanner/IntroBanner.jsx";
import AdvantageEl from "../../components/Advantages/AdvantageEl.jsx";
import Video from "../../components/Video/Video.jsx";
import Counters from "../../components/Counters/Counters.jsx";
import { aboutUsList } from "../../data.js";
import bannerPhoto from "../../assets/main_header.png";
import SwiperTeachers from "../../components/SwiperTeachers/SwiperTeachers.jsx";
import TextGradientTopBorder from "../../components/TextGradientTopBorder/TextGradientTopBorder.jsx";
import AboutUsBackgroundLi from "./AboutUsBackgroundLi.jsx";
import TextWithHeader from "../../components/TextWithHeader/TextWithHeader.jsx";

export default function AboutUs() {
  return (
    <>
      <Header theme="light" />
      <main>
        <IntroBanner type="main" imgSrc={bannerPhoto} />

        <div className="side-margins">
          <ul className="advantages">
            {aboutUsList["aboutUsList1"].map((info, i) => (
              <AdvantageEl key={i} {...info} />
            ))}
          </ul>

          <Video />
          <div className="founder">
            <div className="founder-1">
              <img
                src={aboutUsList["founder"].imgSrc}
                alt={aboutUsList["founder"].imgAlt}
              />
              <p className="text-18-bold">{aboutUsList["founder"].name}</p>
              <p className="text-14-med">{aboutUsList["founder"].text1}</p>
            </div>
            <div className="founder-1">
              <p className="text-16-reg text-lineh-26">
                {aboutUsList["founder"].text2}
              </p>
              <p className="text-14-reg">{aboutUsList["founder"].text3}</p>
            </div>
          </div>
          <TextWithHeader
            text="Наши ценности"
            content={
                <ul className="advantages">
                {aboutUsList["advantageListLong"].map((info, i) => (
                  <AdvantageEl key={i} {...info} />
                ))}
              </ul>
            }
          />

        </div>

        <SwiperTeachers header="Наши люди" />

        <div className="side-margins">
          <TextWithHeader
            text="Наши программы"
            content={
              <div className="aboutUsList2">
                {aboutUsList["aboutUsList2"].map((info) => (
                  <TextGradientTopBorder
                    text1={info}
                    className1="text-14-med text-lineh-24"
                  />
                ))}
              </div>
            }
          />

          <Counters header="" />

          <TextWithHeader
            text="Наши партнеры"
            content={
              <div className="partners">
                {aboutUsList["partners"].map((info) => (
                  <AboutUsBackgroundLi imgSrc={info} bgColor="bg-white" />
                ))}
              </div>
            }
          />
          <TextWithHeader
            text="Нажми, если это о тебе"
            content={
              <div className="aboutU">
                {aboutUsList["aboutU"].map((info, i) => (
                  <AboutUsBackgroundLi
                    {...info}
                    bgColor={`bg-course-${i + 1}`}
                  />
                ))}
              </div>
            }
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
