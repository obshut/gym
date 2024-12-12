import React, {useState} from 'react';
import "./questions.css";
import "./questions_media.css";

function Questions() {

    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);

    return (
        <div className={"questions__div"}>
            <div className={"questions__container"}>
                <div className={"questions__button__div"}>
                    <div className={"questions__button"}
                         onClick={() => setShowText(!showText)}>
                        Какую программу тренировок стоит выбрать?
                        {showText &&
                            <p className={"questions__p"}>
                                Выбор программы тренировок зависит от ваших индивидуальных целей и физического
                                состояния.
                                Перед
                                началом тренировок рекомендуется проконсультироваться с фитнес тренером, чтобы они могли
                                разработать программу, соответствующую вашим целям и способностям. Они могут предложить
                                программу, которая включает разнообразные упражнения для развития силы, выносливости и
                                гибкости.
                            </p>
                        }
                    </div>
                </div>
                <div className={"questions__button__div"}>
                    <div
                        className={"questions__button"}
                        onClick={() => setShowText1(!showText1)}>
                        Какие преимущества предоставляют тренировки с тренером?
                        {showText1 &&
                            <p className={"questions__p"}>
                                Тренировка с тренером имеет множество преимуществ. Опытный тренер поможет вам правильно
                                выполнять
                                упражнения, следить за вашим прогрессом и своевременно корректировать программу
                                тренировок.
                                Они
                                также могут дать дополнительные советы по питанию и образу жизни, которые помогут
                                достичь
                                ваших
                                целей более эффективно.
                            </p>
                        }
                    </div>
                </div>
                <div className={"questions__button__div"}>
                    <div className={"questions__button"}
                         onClick={() => setShowText2(!showText2)}>
                        Как долго должна длиться тренировка?
                        {showText2 &&
                            <p className={"questions__p"}>
                                Длительность тренировки зависит от вашей физической подготовленности и целей. Обычно
                                тренировка
                                в
                                спортзале может занимать от 45 минут до 1,5 часов. Важно помнить, что качество
                                тренировки
                                важнее
                                продолжительности. Лучше концентрироваться на выполнении упражнений правильно и с
                                наилучшей
                                техникой, чем просто проводить время в зале.
                            </p>
                        }
                    </div>
                </div>
                <div className={"questions__button__div"}>
                    <div
                        className={"questions__button"}
                        onClick={() => setShowText3(!showText3)}>
                        Как избежать травм при тренировках в спортзале?
                        {showText3 &&
                            <p className={"questions__p"}>Правильная техника выполнения упражнений является ключевым
                                фактором для предотвращения
                                травм.
                                Важно освоить правильную форму и следовать рекомендациям тренера. Также рекомендуется не
                                перегружать себя слишком интенсивными тренировками, правильно разогреваться перед
                                тренировкой и
                                соблюдать разумную предосторожность во время выполнения упражнений.
                            </p>
                        }
                    </div>
                </div>

                <div className={"questions__button__div"}>
                    <div
                        className={"questions__button"}
                        onClick={() => setShowText4(!showText4)}>
                        В чем заключается роль кардиотренировок в спортзале?
                        {showText4 &&
                            <p className={"questions__p"}>
                                Кардиотренировки в спортзале играют важную роль в поддержании общей физической формы и
                                улучшении кардиоваскулярной системы. Такие упражнения, как беговая дорожка, велотренажер
                                или эллиптический тренажер, могут помочь сжигать калории, укреплять сердце и легкие, а
                                также повышать выносливость. Рекомендуется включать кардиотренировки в свою программу
                                тренировок, оптимально проводить их 2-3 раза в неделю.
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Questions;

