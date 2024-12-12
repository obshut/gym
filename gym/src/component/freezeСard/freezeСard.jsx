import React from "react";
import "./freezeCard.css";
import action1 from "../../img/freeze1.png"
import action2 from "../../img/freeze2.png"
import action3 from "../../img/freeze3.png"
import action4 from "../../img/freeze4.png"
import action5 from "../../img/freeze5.png"
import FreezeSlider from "../freezeSlider/freezeSlider";

const FreezeCard = () => {
    return(
      <div className={"freeze__div"}>

          <div className="freeze__text">
              <h2 className={"freeze__h2"}>Заморозь свою <span className={"freeze__span"}>карту Moreon</span></h2>
              <p>
                  Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг), множеством силовых тренажеров и набором
                  штанг.
                  Под каждую группу мышц есть как минимум 5 разновидностей оборудования. Тренажерный зал оборудован
                  гантельным рядом (от 1 до 40 кг), множеством силовых тренажеров и набором штанг.
                  Под каждую группу мышц есть как минимум 5 разновидностей оборудования.
                  Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг), множеством силовых тренажеров и набором
                  штанг.
              </p>
          </div>
          <div className="freeze_slider">
              <img className={"freeze__img"} src={action1}/>
              <img className={"freeze__img"} src={action3}/>
              <img className={"freeze__img"} src={action4}/>
              <img className={"freeze__img"} src={action5}/>
          </div>
      </div>
    );
}

export default FreezeCard;