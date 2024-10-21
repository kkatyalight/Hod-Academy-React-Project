import "./Question.css"
import { useState } from "react";
import close from "../../assets/close.svg"

export default function Question({question,answer}) {
    const [isActive, setIsActive] = useState(false);
    const openList = () => {
      setIsActive(!isActive);
      console.log(isActive);
    }
    return (
<div className={`question ${isActive && "shadow"}`} onClick={openList}>
    <img src={close} alt="closeIcon" className={`close-icon ${isActive && "close-icon-opened"}`}/>
<p className="text-18-med">{question}</p>
{isActive && <p className="text-14-reg text-lineh-26 answer">{answer}</p>}

</div>
    );
}