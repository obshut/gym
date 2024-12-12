import React from "react";
import './services.css';
import Team from "../team/team";
import Yasnevo from "../yasnevo/yasnevo";
import "./services_media.css";
import "./services_media.css";

const Services = () => {
    return (
        <div className={'services'}>
            <div className={'service__div'}>
                <div className={'services__container'}>
                    <div className={"service__img"}>
                        <div className={"service__dark__img"}>
                            <div className="head">
                                <h2 className={'service'}>Услуги</h2>
                                <p className={'services__text'}>
                                    Занятия фитнесом – это микс эффективных упражнений, мотивирующего влияния тренера,
                                    духа
                                    соревнований и общения с единомышленниками.Члены клуба Мореон Фитнес получают доступ
                                    к
                                    тренажерному залу, бассейнам, скалодрому и 40 видам групповых занятий для разного
                                    уровня
                                    подготовки и возраста – от начинающих до продвинутых спортсменов, для детей и
                                    взрослых.
                                </p>
                                {/*<button>*/}
                                {/*    <p>Записаться</p>*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                    <div className="directions">
                        <h2>Направления занятий</h2>
                        <div className="directions__cards">
                            <div className="directions__card card__one">
                                <div className="directions__text">
                                    <p>Mind Body</p>
                                </div>
                            </div>

                            <div className="directions__card card__two">
                                <div className="directions__text">
                                    <p>Силовые и функциональные тренировки</p>
                                </div>
                            </div>

                            <div className="directions__card card__three">
                                <div className="directions__text">
                                    <p>Кардиограммы и аэробика</p>
                                </div>
                            </div>

                            <div className="directions__card card__four">
                                <div className="directions__text">
                                    <p>Тренажерный зал</p>
                                </div>
                            </div>

                            <div className="directions__card card__five">
                                <div className="directions__text">
                                    <p>Водные программы</p>
                                </div>
                            </div>

                            <div className="directions__card card__six">
                                <div className="directions__text">
                                    <p>Единоборства</p>
                                </div>
                            </div>

                            <div className="directions__card card__seven">
                                <div className="directions__text">
                                    <p>Танцы</p>
                                </div>
                            </div>

                            <div className="directions__card card__eight">
                                <div className="directions__text">
                                    <p>Персональный тренинг</p>
                                </div>
                            </div>

                            <div className="directions__card card__nine">
                                <div className="directions__text">
                                    <p>Йога</p>
                                </div>
                            </div>

                            <div className="directions__card card__ten">
                                <div className="directions__text">
                                    <p>Фитнес-тестирование</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Team/>
                    <Yasnevo/>
                </div>
            </div>
        </div>
    )
}

export default Services;