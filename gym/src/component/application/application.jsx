import React from "react";
import application from "../../img/adpplication.png";
import "./application.css";
import "./application_media.css";
import app from "../../img/app_store.webp";
import play_market from "../../img/play_market.jpg";

const Application = () => {
    return (
        <div className={"application__div"}>

            <div className="application__flex">
                <img className={"application__phone"}
                     src={application}
                     alt={"Приложение"}/>
                <div className="application__text">
                    <h2 className={"application__h2"}>Приложение <span
                        className={"application__span"}>Moreon Fitness</span>
                    </h2>
                    <p className={"application__p"}>
                        Тренажерный зал оборудован гантельным рядом (от 1 до 40 кг), множеством силовых тренажеров и
                        набором штанг.
                        Под каждую группу мышц есть как минимум 5 разновидностей оборудования. Тренажерный зал
                        оборудован
                        гантельным рядом (от 1 до 40 кг), множеством силовых тренажеров и набором штанг.
                        Под каждую группу мышц есть как минимум 5 разновидностей оборудования.
                    </p>
                    <div className={"application__img"}>
                        <a target={'_blank'} href={'https://play.google.com/store/apps?hl=ru&gl=US'}>
                            <img
                                className={"footer__market"}
                                src={play_market}
                                alt={"Play Market"}/>
                        </a>
                        <a target={'_blank'} href={'https://apps.apple.com/ru/genre/mac/id39?mt=12'}>
                            <img
                                className={"footer__store"}
                                src={app}
                                alt={"App Store"}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;