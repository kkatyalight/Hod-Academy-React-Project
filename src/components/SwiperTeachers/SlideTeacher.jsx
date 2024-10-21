import star from "../../assets/review_star_icon.svg";

export default function SlideTeachers(props) {
  return (
    <div className="swiper-slide-teacher">
        <div className="border">
        <img src={props.imgSrc} alt="teacher" />
        </div>
      <p className="swiper-slide-teacher-name text-18-bold">{props.name}</p>
      <p className="swiper-slide-teacher-about text-14-med text-lineh-22">{props.about}</p>
    </div>
  );
}
