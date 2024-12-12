import React, {useEffect, useState} from "react";
import "./team.css";
import "./team_media.css";
import {NavLink} from "react-router-dom";

const Team = () => {

    const [trainers, setTrener] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token);
        fetch('http://localhost:8080/trainer/info', {
            method: 'GET',
            headers: {
                'Authorization': token, 
                'Content-Type': 'application/json'
            }
        })
        .then(response2 => response2.json())
        .then(data => {
            console.log(data);
            const trenerList = Object.keys(data).map(id => ({                  
                trainerId: data[id].trainerId,  
                name: data[id].name, 
                position: data[id].position 
            }));
            setTrener(trenerList);
        })
        .catch(error => {
            console.error('Ошибка при получении отзывов:', error);
        });
    }, []);


    const json = (event) => {
        localStorage.setItem('trenerId', event.currentTarget.id);
    };


    const getTrainerImage = (trainerId) => {
        try {
            console.log(trainerId);
            
            return require(`../../img/team${trainerId}.png`);
        } catch (e) {
            console.log('Изображение не найдено');
            
        }
    };


    return (
        <div className={"container__team"}>
            <p className={"team"}>Команда</p>
            <div className={"cards"}>


            {trainers.map((trainer, id) => (
                <button className={"button__nav"} id={trainer.trainerId} onClick={json}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} to={"/trainer"}>
                            <div className="card__team">
                             <img 
                                    className={"one"}
                                    src={getTrainerImage(trainer.trainerId)} 
                                />
                            <div className="text__team">
                                <div className="tex">
                                    <p className={"name"}>{trainer.name}</p>
                                    <p className={"trener"}>{trainer.position}</p>
                                </div>
                            </div>
                        </div>
                        </NavLink>
                        </button>
                ))}

            </div>
        </div>

    );
}

export default Team;