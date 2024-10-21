import "./IntroBanner.css";
import TextGradientTopBorder from  "../../components/TextGradientTopBorder/TextGradientTopBorder.jsx";
import Button from  "../../components/Button/Button.jsx";


export default function IntroBanner(props) {
  if (props.type == "main") {
    return (
      <section className="intro-banner-wrapper">
        <img src={props.imgSrc} alt="" />
        <div className="intro-banner-background dotted-background"></div>
        <div className="intro-banner-text text-white">
          <p className="text-36-bold text-on-dotts">
            Образовательная платформа
          </p>
          <p className="text-36-bold text-on-dotts">ХОД Future Academy</p>
          <br />
          <p className="text-20-med text-on-dotts">
            Актуальные знания для новичков и профессионалов
          </p>
        </div>
      </section>
    );
  } else if (props.type == "course") {
    return(    
    <section className="intro-banner-wrapper">
        <div className="intro-banner-background-2">
        <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className="intro-banner-text-2 text-white">
          {/* <p className="text-42-bold">{props.h1}</p>
          <p className="text-24-med"> {props.h2}</p> */}
          <p className="text-42-bold">{props.headerWithID}</p>
          <p className="text-24-med">Шаблон страницы курса</p>
  
          <div className="course-info-wrapper">
            <div className="course-info-wrapper-row1">
              <TextGradientTopBorder
                text1="Срок обучения"
                text2={props.time1}
                className1="text-14-med"
                className2="text-14-med"
              />
              <TextGradientTopBorder
                text1="Режим занятий"
                text2={props.time2}
                className1="text-14-med"
                className2="text-14-med"
              />
            </div>
            <TextGradientTopBorder
              text1={props.price}
              className1="text-28-bold"
            />
            <p className="text-28-bold">1 занятие бесплатное</p>
            <p className="text-16-reg">
              Прежде чем начать обучение советуем записаться на пробное заниятие
            </p>
            <Button
          className="button-flex-start"
          text="Записаться на пробное занятие"
          link=""
          />

          </div>
  
        </div>
      </section>
      );

  } else if (props.type == "event") {
    return(
      <section className="intro-banner-wrapper">
      <div className="intro-banner-background-3">
      <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="intro-banner-text-2 text-white">
        {/* <p className="text-42-bold">{props.h1}</p> */}
        <p className="text-42-bold">{props.headerWithID}</p>
        <p className="text-24-med"> {props.h2}</p>

        <div className="course-info-wrapper">
          <div className="event-info-wrapper">
            <TextGradientTopBorder
              text1={props.text1}
              className1="text-14-med"
            />
            <TextGradientTopBorder
              text1={props.text2}
              className1="text-14-med"
            />
             <TextGradientTopBorder
             text1={props.text3}
              className1="text-14-med"
          />
          </div>
         
          <p className="text-28-bold">Запишись сейчас</p>
          <Button
          className="button-flex-start"
          text="Записаться на интенсив"
          link=""
          />
        </div>

      </div>
    </section>
    );
  }
}
