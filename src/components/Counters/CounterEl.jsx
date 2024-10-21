export default function CounterEl(props) {
  return (
    <li>
      <p>{props.name}</p>
      <span
        id={props.id}
        className="main-general-counters-dynamic stroke-text"
      />
    </li>
  );
}
