import star from '../../assets/review_star_icon.svg';

export default function Slide(props){
    return(
        <div className="swiper-slide-review">
        <div className="swiper-slide-header">
            <img src={props.imgSrc} alt="review-photo"/>
            <div className="swiper-slide-header-text">
                <p className="text-14-bold text-black">{props.name}</p>
                <p className="text-12-med text-grey2">{props.courseName}</p>
            </div>
        </div>
        <p className="text-14-med text-black text-lineh-22">
        {props.text}
        </p>
        <div className="swiper-slide-rating">
            <img src={star} alt="review_star_icon"/>
            <p className=" text-14-med text-grey2 text-lineh-22">{props.rate}/5</p>
        </div>
    </div>
    );
}