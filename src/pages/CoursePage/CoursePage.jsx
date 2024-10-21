import { useParams } from "react-router-dom";
import "../../style.css";
import "../../text-style.css";
import "./CoursePage.css";

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IntroBanner from "../../components/IntroBanner/IntroBanner";
import Video from "../../components/Video/Video";
import videoSrc from "/src/assets/video.mp4";
import { coursesArticles, courseInfo, advantageList } from "../../data";
import SwiperPhoto from "../../components/SwiperPhoto/SwiperPhoto.jsx";
import TextGradientTopBorder from "../../components/TextGradientTopBorder/TextGradientTopBorder.jsx";
import SwiperTeachers from "../../components/SwiperTeachers/SwiperTeachers.jsx";
import Question from "../../components/Question/Question.jsx";
import owl from "../../assets/owl.png";
import AdvantageEl from "../../components/Advantages/AdvantageEl";
import Advantages from "../../components/Advantages/Advantages.jsx";
import TextWithHeader from "../../components/TextWithHeader/TextWithHeader.jsx";
import Button from "../../components/Button/Button.jsx";

export default function CoursePage() {
  const params = useParams();
  var courseIndex = coursesArticles.findIndex(
    (course) => course.courseID == params.courseId
  );
  var curCourse = coursesArticles[courseIndex];
  console.log("courseP");
  return (
    <>
      <Header theme="light" />

      <main className="">
        <IntroBanner
          type="course"
          {...courseInfo["headerInfo"]}
          headerWithID={curCourse.courseName}
        />

        <div className="side-margins">
          <TextWithHeader
            text=""
            content={
              <Advantages
                content={courseInfo["goals"].map((info, i) => (
                  <AdvantageEl key={i} {...info} />
                ))}
              />
            }
          />

          <Video videoSrc={videoSrc} />

          <TextWithHeader
            text={courseInfo["intermidText1"].h1}
            content={
              <>
                <p className="text-18-reg text-lineh-26">
                  {courseInfo["intermidText1"].text}
                </p>
                <Advantages
                  content={courseInfo["adv"].map((info, i) => (
                    <AdvantageEl key={i} {...info} />
                  ))}
                />
              </>
            }
          />
        </div>

        <div className="intermidBanner">
          <div className="side-margins intermidBanner-text text-18-reg text-lineh-26 text-white">
            <p>{courseInfo["intermidText2"].text1}</p>
            <p>{courseInfo["intermidText2"].text2}</p>
          </div>
          <Button
          className="button-flex-center"
          text="Записаться на курс"
          link=""
          />
        </div>

        <div className="side-margins">
          <TextWithHeader
            text={courseInfo["intermidText3"].h1}
            content={
              <p className="text-18-reg text-lineh-26">
                {courseInfo["intermidText3"].text}
              </p>
            }
          />
        </div>

        <SwiperPhoto photos={courseInfo["photoSlides"]} />

        <div className="side-margins">
          <TextWithHeader
            className="course-page-flex-wrap"
            text={courseInfo["intermidText4"].h1}
            content={
              <>
                <p className="text-18-reg text-lineh-26 text-near-owl">
                  {courseInfo["intermidText4"].text}
                </p>
                <div className="course-info-wrapper">
                  <div className="course-info-wrapper-row1">
                    <TextGradientTopBorder
                      text1="Срок обучения"
                      text2={courseInfo["headerInfo"].time1}
                      className1="text-14-med"
                      className2="text-14-med"
                    />
                    <TextGradientTopBorder
                      text1="Режим занятий"
                      text2={courseInfo["headerInfo"].time2}
                      className1="text-14-med"
                      className2="text-14-med"
                    />
                  </div>
                  <TextGradientTopBorder
                    text1={courseInfo["headerInfo"].price}
                    className1="text-28-bold"
                  />
                   <Button
          className="button-flex-start"
          text="Записаться на курс"
          link=""
          />
                </div>
                <img src={owl} alt="owl" className="owl" />
              </>
            }
          />
        </div>

        <SwiperTeachers header="Наши преподаватели" />

        <div className="side-margins">
          <TextWithHeader
            text="Найдите ответ на свой вопрос"
            content={
              <>
                {courseInfo["answers"].map((info, i) => (
                  <Question key={i} {...info} />
                ))}
              </>
            }
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
