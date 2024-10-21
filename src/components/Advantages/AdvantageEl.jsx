export default function AdvantageEl(props) {
  return (
    <li>
      <img src={props.imgSrc} alt={props.imgAlt} />
      {props.strongText && <p className="text-24-bold">{props.strongText}</p>}
      <p>{props.text}</p>
    </li>
  );
}
