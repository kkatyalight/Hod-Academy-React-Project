import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "../../../node_modules/swiper/modules/scrollbar.min.css";
import "swiper/css/scrollbar";
import "swiper/css";

import "./SwiperPhoto.css";


export default function SwiperReviews({photos}) {

  return (
    <Swiper
    // install Swiper modules
    modules={[Scrollbar]}
    centeredSlides={false}
   
    spaceBetween={20}
    slidesPerView={5}
    scrollbar={{ draggable: true }}
    className="swiper-photo"
  >
    {photos.map((info,i) => (
      <SwiperSlide key={i} className="swiper-slide-photo">
          <img src={info} alt="slidePhoto"/>
      </SwiperSlide>
    ))}
  </Swiper>
  );
}
