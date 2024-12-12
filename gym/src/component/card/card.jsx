import React from "react";
import "./card.css";
import "./card_media.css";
import borba from '../../img/Group12.png'

const Card = () => {
    return (
    <div className={"club__card"}>
        <p className={"cards__text"}>В каждой <span className={"club__span"}>клубной карте</span></p>
        <div className={"cards"}>
            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_3_1_" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/a-UbmZHd4Em8VkNYa5fCUA.svg" />
                <p className={"card__text"}>Тренажерный зал</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_4_1_" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/XIW74qCTh0yJZ2uKmwjxgg.svg" />
                <p className={"card__text"}>Групповые программы</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_5" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/rr92hV3HcU-7ywnsFicnrw.svg" />
                <p className={"card__text"}>Бассейн</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Group" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/8mFouHZYTEqwo147mSGPkA.svg" />
                <p className={"card__text"}>Вводные тренировки</p>
            </div>

            <div className={"card"}>
                <img src={borba} alt={'borba'}/>
                <p className={"card__text"}>Единоборства</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_8" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/h9r_wUA6YUaAOMtKF1aQVQ.svg" />
                <p className={"card__text"}>Бесплатная парковка</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_6" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/l02g54ura0u_XixAaO1HmA.svg" />
                <p className={"card__text"}>Клубная жизнь</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_5" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/H0bEww-flk2ELo2pTWNqQQ.svg" />
                <p className={"card__text"}>Фитнес диагностика</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="rVtfzN_1_" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/uxaSmw21Pk-D7ZTUNY6MUg.svg" />
                <p className={"card__text"}>Полотенца</p>
            </div>

            <div className={"card"}>
                <embed className={"embed"} type="image/svg+xml" alt="Layer_7" src="https://cdn-eu.icons8.com/docs/0Ar4vc24d06nYh6uSGypgw/0csZbgts0Uew8OpHCxxKag.svg" />
                <p className={"card__text"}>Халаты</p>
            </div>

        </div>
    </div>
    );
}

export default Card;