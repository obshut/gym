import React, {useEffect, useState} from "react";
import "./open.css";
import "./open_media.css";



const Open = () => {
    return (
        <div className={'open__div'}>
            <div className={"container"}>
                <div className={"text"}>
                    <p className={"h2"}><span className={"moreon"}>Moreon Fitness </span>
                        откроет для вас
                        новые возможности</p>
                    <p className={"p"}>
                        500 000 м2 фитнес зала, 100 500 тренажеров VIP уровня, Бассейны и СПА центр,
                        гибкая клубная карта, персональные тренировки и все самые продвинутые программы 2022 года
                        ждут вас в Moreon Fitness
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Open;