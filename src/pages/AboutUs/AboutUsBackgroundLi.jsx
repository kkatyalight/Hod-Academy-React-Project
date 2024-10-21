
export default function AboutUsBackgroundLi({imgSrc,text,bgColor}) {

  return (
    <div className={`${bgColor} background-li shadow`}>
      <img src={imgSrc} alt="bgLiImg" />
      {text&&  <p className="text-16-med">{text}</p>}
      </div>
  );
 
}