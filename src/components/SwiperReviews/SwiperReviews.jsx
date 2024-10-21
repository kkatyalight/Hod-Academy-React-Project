import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "../../../node_modules/swiper/modules/scrollbar.min.css";
import "swiper/css/scrollbar";
import "swiper/css";

import "./SwiperReviews.css";
import Slide from "./Slide.jsx";

import { reviews } from "../../data.js";

export default function SwiperReviews() {
  return (
    <section className="dotted-background main-reviews">
      <p className="text-36-bold text-white text-on-dotts">
        Отзывы наших студентов
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
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="swiper-review"
      >
        {reviews.map((info) => (
          <SwiperSlide key={info.name}>
            <Slide  {...info} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
