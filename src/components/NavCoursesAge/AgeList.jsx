import  './NavCoursesAge.css';
export default function AgeList({imgSrc,imgAlt,text,subText, isSelected, onClick}) { 

  return (

    <li onClick={onClick}>
      <div className="age-list-el">
        {imgSrc && <img src={imgSrc} alt={imgAlt}/>}
        <div>
          <p className="text-16-bold">{text}</p>
          {subText && <p className="text-12-reg">{subText}</p>}
        </div>
      </div>
      <div className="gradient-bottom-border">
        <div className="fill-inactive"></div>
        {isSelected && <div className="fill-active"></div>}
  
      </div>
    </li>
  );
}
