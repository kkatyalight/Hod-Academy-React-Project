import "./Counters.css";
import CounterEl from "./CounterEl";

export default function Counters({header}) {
  return (
    <div className="main-general-counters text-black">
      {header && <p className="text-24-bold">{header}</p>}

      <ul className="main-general-counters-list text-20-med">
        <CounterEl name="Курсов" id="counter_courses" />
        <CounterEl name="Ведущих преподавателей" id="counter_teachers" />
        <CounterEl name="Выпускников" id="counter_students" />
      </ul>
    </div>
  );
}
