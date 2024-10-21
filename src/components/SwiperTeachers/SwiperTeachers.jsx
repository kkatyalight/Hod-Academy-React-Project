import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "../../../node_modules/swiper/modules/scrollbar.min.css";
import "swiper/css/scrollbar";
import "swiper/css";

import "./SwiperTeachers.css";
import SlideTeacher from "./SlideTeacher.jsx";

import { teachers } from "../../data.js";

export default function SwiperTeachers(props) {
  return (
<div className="dotted-background swiper-teachers-wrap">
<p className="text-36-bold text-white text-on-dotts">
       {props.header}
      </p>
<Swiper
        // install Swiper modules
        modules={[Scrollbar]}
        centeredSlides={false}
        // freemode={false}
        // loop={true}
        autoHeight={true}
        spaceBetween={30}
        slidesPerView={6}
        scrollbar={{ draggable: true }}
        className="swiper-teachers"
      >
        {teachers.map((info) => (
          <SwiperSlide key={info.name}>
            <SlideTeacher  {...info} />
          </SwiperSlide>
        ))}
      </Swiper>
</div>
     
  );
}
