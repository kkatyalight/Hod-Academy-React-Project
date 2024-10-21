import "./NavCoursesAge.css";
import AgeList from "./AgeList";
import CoursesNameList from "./CoursesNameList";
import {footerInfoChildren, footerInfoTeens, footerInfoAdults, ageList} from "../../data.js";
import { useState } from "react";


export default function NavCoursesAge(props) {
  const [coursesName, setCoursesName] = useState("Дети");
  const [gradientBottom, setGradientBottom] = useState("Дети");

  const ageListToggle=(index)=> {
    setCoursesName(index);
    setGradientBottom(index);
  };

  return (
    <div className={`main-general-info-courses ${props.margin}`} >
      <ul className="main-general-info-courses-age addBottomBorderIfSelected">  
        {ageList.map((info) => (
          <AgeList     
              
            key={info.text}
            {...info}
            onClick={()=>ageListToggle(info.text)}
            isSelected={info.text==coursesName}
          />
          
        ))}
      </ul>

      <ul className="main-general-info-courses-name text-14-med">
        {coursesName=="Дети" && footerInfoChildren.slice(1).map((info)=>(
        <CoursesNameList key={info.text} {...info}/>
      ))}
      {coursesName=="Подростки" && footerInfoTeens.slice(1).map((info)=>(
        <CoursesNameList key={info.text} {...info}/>
      ))}
      {coursesName=="Взрослые" && footerInfoAdults.slice(1).map((info)=>(
        <CoursesNameList key={info.text} {...info}/>
      ))}
      </ul>
    </div>
  );
}
