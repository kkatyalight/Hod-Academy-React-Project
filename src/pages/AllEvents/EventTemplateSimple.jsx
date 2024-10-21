export default function EventTemplateSimple(props) {
  return (
    <div className="event-template-2">
      <p>{props.type}</p>
      <div>
        <img src="src/assets/programs_icon.svg" alt="" />
        <p>{props.header}</p>
      </div>
      <p>
        {props.text}
      </p>
      <p>{props.date}</p>
    </div>
  );
}
