import "../../style.css";
import "../../text-style.css";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import IntroBanner from "../../components/IntroBanner/IntroBanner.jsx";
import NavCoursesAge from "../../components/NavCoursesAge/NavCoursesAge.jsx";
import Video from "../../components/Video/Video.jsx";
import videoSrc from "/src/assets/video.mp4";
import Counters from "../../components/Counters/Counters.jsx";
import HomeArticles from "../../components/HomeArticles/HomeArticles.jsx";
import SwiperReviews from "../../components/SwiperReviews/SwiperReviews.jsx";
import Advantages from "../../components/Advantages/Advantages.jsx";
import TextWithHeader from "../../components/TextWithHeader/TextWithHeader.jsx";
import bannerPhoto from "../../assets/main_header.png";
import { advantageList } from "../../data";
import AdvantageEl from "../../components/Advantages/AdvantageEl.jsx";
export default function Home() {
  return (
    <>
      <Header theme="light" />
      <main>
        <IntroBanner type="main" imgSrc={bannerPhoto} />
        <div className="side-margins">
          <NavCoursesAge />
        </div>
        <Video videoSrc={videoSrc} />
        <div className="side-margins">
          <Counters
            header="Актуальные знания от признаных экспертов рынка для новичков и
        практикующих специалистов."
          />
          <HomeArticles />
        </div>
        <SwiperReviews />
        <div className="side-margins">
          <TextWithHeader
            text="Добро пожаловать в Академию будущего ХОД"
            content={
              <Advantages
                content={advantageList.map((info, i) => (
                  <AdvantageEl key={i} {...info} />
                ))}
              />
            }
          />
        </div>
      </main>
 
      <Footer />
    </>
  );
}
