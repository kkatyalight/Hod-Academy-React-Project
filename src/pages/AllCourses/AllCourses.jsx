import "../../style.css";
import "../../text-style.css";
import "./AllCourses.css"

import { useState } from "react";
import { coursesArticles } from "../../data.js";

import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NavCoursesAge from "../../components/NavCoursesAge/NavCoursesAge.jsx";
import CourseArticle from "./CourseArticle.jsx";
import Filter from "./Filter.jsx";
// import RangeSlider from "./RangeSlider.jsx";
import Slider from "react-slider";

export default function AllCourses() {
  const MIN=1, MAX=24;
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div>
      <Header theme="dark"/>
      <main className="grid side-margins">
        <p className="text-36-bold all-courses-headtext">
          Все программы обучения
        </p>
        <NavCoursesAge margin="main-general-info-courses-small-margin"/>

        <div className="info-courses-articles text-12-reg">
          {coursesArticles.map((info) => (
            <CourseArticle key={info.courseName} {...info} />
          ))}
        </div>

        <div className="info-courses-filter">
          <ul className="filter-level text-14-reg">
            <li className="text-16-med">Уровень сложности</li>
            <Filter text="Новичок"/>
            <Filter text="Пользователь"/>
            <Filter text="Профессионал"/>
            <Filter text="Читер"/>
          </ul>

          <ul className="filter-type text-14-reg">
            <li className="text-16-med">Тип обучения</li>
            <Filter text="Любой" />
            <Filter text="Профессия" />
            <Filter text="Курс" />
          </ul>

          <ul className="filter-time text-14-reg">
            <li className="text-16-med">Длительность</li>
            <li className="textTime">{`от ${values[0]} до ${values[1]} месяцев`}</li>
            <li className="sliderTime">

            <Slider className="slider" onChange={setValues} value={values} min={MIN} max={MAX}/>
            </li>

          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
