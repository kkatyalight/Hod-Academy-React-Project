import "./TextGradientTopBorder.css";
export default function TextGradientTopBorder(props) {
  return (
    <div className="gradient-top-border">
      {/* <p className={`${props.className1} gradient-top-border`}>{props.text1}  <br/> {props.text2 && props.text2} </p> */}
      <p className={props.className1}>{props.text1}</p>
      {props.text2 && <span><p className={props.className2}>{props.text2}</p></span>}
    </div>
  );
 
}
