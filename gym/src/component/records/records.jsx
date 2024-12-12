import React, { useState ,useEffect } from "react";

const Records = () =>{

    const [currentDate, setCurrentDate] = useState(new Date());
    const [trainerList, setTrainerList] = useState([]);
    const token = localStorage.getItem('token');
    const clientId = localStorage.getItem('id');

      const getWeekDays = (date) => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Понедельник недели
        const days = [];
        for (let i = 0; i < 7; i++) {
          const day = new Date(startOfWeek);
          day.setDate(startOfWeek.getDate() + i);
          days.push(day);
        }
        return days;
      };
    
      const getMinDate = () => {
        const minDate = new Date();
        minDate.setDate(minDate.getDate());
        return minDate;
      };

      const getMaxDate = () => {
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 2);
        return maxDate;
      };
    
      const changeWeek = (direction) => {
        setCurrentDate((prevDate) => {
          const newDate = new Date(prevDate);
          newDate.setDate(prevDate.getDate() + direction * 7);
          if (newDate < getMinDate()) {
            return getMinDate();
          }
          if (newDate > getMaxDate()) {
            return getMaxDate();
          }
          return newDate;
        });
      };
    
      const changeMonth = (direction) => {
        setCurrentDate((prevDate) => {
          const newDate = new Date(prevDate);
          newDate.setMonth(prevDate.getMonth() + direction);
          if (newDate < getMinDate()) {
            return getMinDate();
          }
          if (newDate > getMaxDate()) {
            return getMaxDate();
          }
          return newDate;
        });
    
      
      };
      const weekDays = getWeekDays(currentDate);

    useEffect(() => {
        const trenerId = localStorage.getItem('trenerId')
        window.scrollTo(0, 0);
        const weekDays = getWeekDays(currentDate);
        const formattedDate = weekDays[0]
          ? `${weekDays[0].getFullYear()}-${(weekDays[0].getMonth() + 1).toString().padStart(2, '0')}-${weekDays[0].getDate().toString().padStart(2, '0')}`
          : '';

          const getInfo = async () =>{
        const response2 = await fetch(`http://localhost:8080/trainings/${trenerId}/trainer?startDate=${formattedDate}`, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
        });
      const data = await response2.json();
      console.log(data);
      
      
      const trainersList = Object.keys(data).map(id => ({
        trainerId: data[id].trainerId,
        clientId: data[id].clientId,
        clientName: data[id].clientName,
        startTime: data[id].startTime
      }));
  
      setTrainerList(trainersList);
      console.log(trainersList);
      
    }
    getInfo();
    },[currentDate]);


    return(
        <div className="calendar__container">
      <div className="calendar__div">
        <h1 className={"calendar__sapisei"}>Мои занятия</h1>

        <div className="navigation">
          <button className={"moth__button"} onClick={() => changeMonth(-1)} disabled={currentDate <= getMinDate()}>Предыдущий месяц</button>
          <h2>{currentDate.toLocaleString("ru", { month: "long", year: "numeric" })}</h2>
          <button className={"moth__button"} onClick={() => changeMonth(1)} disabled={currentDate >= getMaxDate()}>Следующий месяц</button>
        </div>

        <div className="navigation">
          <button className={"moth__button"} onClick={() => changeWeek(-1)} disabled={currentDate <= getMinDate()}>Предыдущая неделя</button>
          <h3>
            Неделя с {weekDays[0]?.toLocaleDateString("ru")} по {weekDays[6]?.toLocaleDateString("ru")}
          </h3>
          <button className={"moth__button"} onClick={() => changeWeek(1)} disabled={currentDate >= getMaxDate()}>Следующая неделя</button>
        </div>

        <div className="bookings">
          {trainerList.length === 0 ? (
            <p>Записей пока нет</p>
          ) : (
            <ul>
              {trainerList.map((booking, index) => (
                <li key={index}>
                  {new Date(booking.startTime).toLocaleDateString("ru", { weekday: "long" })}{" "}
                  {new Date(booking.startTime).toLocaleDateString("ru", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  - {new Date(booking.startTime).toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })}
                  ({booking.clientName})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
        )
}

export default Records