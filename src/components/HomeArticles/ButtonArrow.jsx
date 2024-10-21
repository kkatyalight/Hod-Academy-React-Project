import arrow from "../../assets/arrow_list_icon.svg";
export default function ButtonArrow(props) {
  return (
    <a className="articles-button" href="#">
      <p className="text-14-med">{props.text}</p>
      <img src={arrow} alt="arrow" />
    </a>
  );
}
