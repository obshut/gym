import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './trener.css';
import './trener_media.css';

const Trener = () => {
    const role = localStorage.getItem('role')
    const [trainerInfo, setTrainerInfo] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
        const token = localStorage.getItem('token');  // Получаем токен из localStorage
        const trenerId = localStorage.getItem('trenerId')
        console.log(trenerId);
        
        console.log(token)
        // Проверяем, если токен есть, выполняем запрос к серверу
        try {
            fetch(`http://localhost:8080/trainer/info/${trenerId}`, {
                method: 'GET',
                headers: {
                    'Authorization': token,  // Передаем токен в заголовке
                    'Content-Type': 'application/json'
                }
            })
            .then(response2 => response2.json())
            .then(data => {
                console.log(data);
                const trainerInfo1 = {                  
                    trainerId: data.trainerId,  
                    name: data.name, 
                    position: data.position ,
                    specialisation: data.specialisation ,
                    education: data.education ,
                    achievement: data.achievement ,
                    experience: data.experience ,
                    instagram: data.instagram ,
                    phone: data.phone
                };
                setTrainerInfo(trainerInfo1);
                console.log(trainerInfo)
            });

        } catch (error) {
            console.error('Ошибка при получении данных тренера:', error);
        }
    }, []);

    if (!trainerInfo) {
        return <div>Загрузка...</div>;
    }

    const getTrainerImage2 = (trainerId) => {
        try {
            console.log(trainerId);
            
            return require(`../../img/team${trainerId}.png`);
        } catch (e) {
            console.log('Изображение не найдено');
            
        }
    };
    localStorage.setItem('trenerName', trainerInfo.name)
    return (
        <div className={"container__trener"}>
            <div className={"trener__div"}>
                <div className={"trener__photo"}>
                    <div>
                    <img 
                        src={getTrainerImage2(trainerInfo.trainerId)} 
                    />
                    </div>
                </div>
                <div className={"info__trener"}>
                    <h2 className={"trener__h2"}>
                        {trainerInfo.name}
                    </h2>

                    <div className={"infa"}>
                        <p>{trainerInfo.position}</p>
                        <p>Стаж работы: {trainerInfo.experience}</p>
                        <p>Телефон: {trainerInfo.phone}</p>
                        <p>Instagram: {trainerInfo.instagram}</p>
                    </div>
                    <div className={"about"}>
                        <h3>Специализация</h3>
                        <p>{trainerInfo.specialisation}</p>

                        <h3>Образование</h3>
                        <p>{trainerInfo.education}</p>

                        <h3>Достижения</h3>
                        <p>{trainerInfo.achievement}</p>
                    </div>
                </div>
            </div>
            {role !== 'TRAINER' && (
            <div className={"calendar__button"}>
                <NavLink className={"zapis"} to="/calendar">
                    Записаться на занятие!
                </NavLink>
            </div>
            )}
        </div>
    );
};

export default Trener;
