import React from "react";
import {NavLink} from "react-router-dom";
import './footer.css';
import './footer_media.css';
import play_market from "../../img/play_market.jpg";
import app from "../../img/app_store.webp";

const Footer = () => {
    return (
        <div>
            <div className="footer__container">
                <div className={'footer__div'}>
                    <div className="footer__time">
                        <NavLink style={{
                            textDecoration: 'none',
                            color: '#33b0aa',
                        }} to={"/home"}>
                            <p className={'footer__moreon'}>m o r e o n <span>F I T N E S</span></p>
                        </NavLink>
                        <ul className={'ul'}>
                            <li className={'time'}><p>Время работы:</p></li>
                            <li className={'weekdays'}>Будни: 07:00 - 23:00</li>
                            <li className={'pool'}>Бассейн: 07:00 - 23:00</li>
                            <li className={'weekend'}>Выходные: 09:00 - 23:00</li>
                            <li className={'pool2'}>Бассейн: 09:00 - 23:00</li>
                        </ul>
                    </div>

                    <div className="gym">
                        <ul className={'ul'}>
                            <li>Тренажерный зал</li>
                            <li>Спортивный бассейн</li>
                            <li>Персональный тренинг</li>
                            <li>Аэробные и кардио программы</li>
                            <li>Скаладром для детей</li>
                        </ul>
                    </div>

                    <div className="gym">
                        <ul className={'ul'}>
                            <li>Единоборства</li>
                            <li>Танцы</li>
                            <li>Фитнес-тестирование</li>
                            <li>Вакансии</li>
                            <li>Подарочный сертификат</li>
                        </ul>
                    </div>

                    <div className="gym gym2">
                        <ul className={'ul'}>
                            <li className={'adress'}>г.Минск, м.Площадь Франтишка Богушевича, ул.Северный переулок
                                д.13
                            </li>
                            <li>+375(29)123-45-67</li>
                        </ul>
                        <div className="download">
                            <p>Скачать приложение</p>
                            <div className={"application__img2 footer__img"}>
                                <a target={'_blank'} href={'https://play.google.com/store/apps?hl=ru&gl=US'}>
                                    <img className={"footer__market"}
                                         src={play_market} alt={"Play Market"}/>
                                </a>
                                <a target={'_blank'} href={'https://apps.apple.com/ru/genre/mac/id39?mt=12'}>
                                    <img
                                    className={"footer__store"}
                                    src={app} alt={"App Store"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;