import React from "react";
import figure from "../../img/figure.png";
import spa from "../../img/spa.png";
import everyone from "../../img/everyone.png";
import experienced from "../../img/experienced.png";
import './benefit.css';
import "./benefit_media.css";

const Benefit = () => {
    return (
        <div className={"benefit__div"}>
            <h2>Выгоды посещения <span> фитнес клуба</span></h2>
            <div className={"benefit__cards"}>

                <div className={"benefit__card"}>
                    <div className="benefit__img">
                        <img src={figure} alt={"Красивая фигура"}/>
                    </div>
                    <div className="benefit__text">
                        <h3>Красивая фигура</h3>
                        <p>Мы выбираем быть красивыми, здоровыми и гармоничными</p>
                    </div>
                </div>

                <div className={"benefit__card"}>
                    <div className="benefit__img">
                        <img src={spa} alt={"Красивая фигура"}/>
                    </div>
                    <div className="benefit__text">
                        <h3>Спа</h3>
                        <p>В клубную карту входит посещенние СПА и бассейна</p>
                    </div>
                </div>

                <div className={"benefit__card"}>
                    <div className="benefit__img">
                        <img src={everyone} alt={"Красивая фигура"}/>
                    </div>
                    <div className="benefit__text">
                        <h3>Подходит всем</h3>
                        <p>Фитнес программы для всех уровней подготовки</p>
                    </div>
                </div>

                <div className={"benefit__card"}>
                    <div className="benefit__img">
                        <img src={experienced} alt={"Красивая фигура"}/>
                    </div>
                    <div className="benefit__text">
                        <h3>Опытные тренеры</h3>
                        <p>Фитнес программы для всех уровней подготовки</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;