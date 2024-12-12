import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { format } from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [trainingsInfo, setTrainingsInfo] = useState([]);
  const [trainingList, setTrainingList] = useState([]);
  const token = localStorage.getItem('token');
  const clientId = localStorage.getItem('id');
  

  const generateSchedule = (isWeekend) => {
    const startHour = isWeekend ? 9 : 7;
    const endHour = 20;
    const intervals = [];
    for (let hour = startHour; hour < endHour; hour++) {
      intervals.push(`${hour}:00`);
      intervals.push(`${hour}:30`);
    }
    return intervals.filter((_, index) => index % 3 === 0);
  };

  const isWeekend = (day) => {    
    return day === 0 || day === 6;
  }

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

  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSelectSlot = (day, time) => {
    const slot = { day: day.toDateString(), time };
    const isSelected = selectedSlots.some(
      (selected) => selected.day === slot.day && selected.time === slot.time
    );
    if (isSelected) {
      setSelectedSlots((prev) =>
        prev.filter((selected) => !(selected.day === slot.day && selected.time === slot.time))
      );
    } else {
      setSelectedSlots((prev) => [...prev, slot]);
    }
  };
  const trenerId = localStorage.getItem('trenerId');
  const handleSaveBookings = () => {
    
    setSelectedSlots([]);
    const requestBody = selectedSlots.map((slot) => {
      const date = new Date(slot.day);
      const [hours, minutes] = slot.time.split(':');
      date.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      const isoDate = date.toISOString();
      return {
        clientId,
        startTime: format(isoDate, "yyyy-MM-dd'T'HH:mm:ss.SSS"),
        trainerId: trenerId,
      };
    });

    requestBody.forEach((body) => {
      fetch("http://localhost:8080/trainings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
        },
        body: JSON.stringify(body),
      });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const weekDays = getWeekDays(currentDate);
    const formattedDate = weekDays[0]
      ? `${weekDays[0].getFullYear()}-${(weekDays[0].getMonth() + 1).toString().padStart(2, '0')}-${weekDays[0].getDate().toString().padStart(2, '0')}`
      : '';

    const fetchTrainingsForWeek = async () => {
  try {
    const response = await fetch(`http://localhost:8080/trainings/${clientId}/client?startDate=${formattedDate}`, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    const trainingsTrainerList = Object.keys(data).map(id => ({
      trainerId: data[id].trainerId,
      clientId: data[id].clientId,
      authorName: data[id].authorName,
      startTime: data[id].startTime
    }));

    const filteredTrainings = trainingsTrainerList.filter(training => training.trainerId === trenerId);

    const response2 = await fetch(`http://localhost:8080/trainings/${trenerId}/trainer/list?startDate=${formattedDate}`, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
    });
    const data2 = await response2.json();
    
    const trainingsList = Object.keys(data2).map(id => ({
      date: new Date(data2[id].date),
      startTime: data2[id].time, 
    }));

    setTrainingsInfo(filteredTrainings);
    setTrainingList(trainingsList);
    

    } catch (error) {
      console.error('Ошибка при получении данных тренера:', error);
    }
  };


    fetchTrainingsForWeek();
  }, [currentDate]);

  const trenerName = localStorage.getItem('trenerName');
  const weekDays = getWeekDays(currentDate);

  const isPastDay = (day) => new Date(day).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);

  const setTimeToDate = (date, timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
  
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
  
    return date;
  }

  const getLocalDateTime = (currentDate) => { 
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяц (нумерация с 0)
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const milliseconds = String(currentDate.getMilliseconds()).padStart(3, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const isSlotBooked = (day, time) => {

      let found = false;
      const dateObj = trainingList.find(item => item.date.toISOString().split('T')[0] === day.toISOString().split('T')[0]);
      const inputDateTime = setTimeToDate(day, time);
      if (dateObj && Array.isArray(dateObj.startTime) && dateObj.startTime.length > 0) {
        
        found = dateObj.startTime.includes(getLocalDateTime(day));
      }
      
      return found;
  };

  return (
    <div className="calendar__container">
      <div className="calendar__div">
        <h1 className={"calendar__sapisei"}>Календарь записей к {trenerName}</h1>

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

        <div className="calendar">
          {weekDays.map((day) => (
            <div key={day.toDateString()} className="day">
              <h2>
                {day.toLocaleDateString("ru", { weekday: "long" })} {day.toLocaleDateString("ru")}
              </h2>
              <ul>
                {generateSchedule(isWeekend(day.getDay())).map((time) => (
                  <li key={time}>
                    <button
                      className={`time-slot ${
                        isPastDay(day) || isSlotBooked(day, time)
                          ? "disabled"
                          : selectedSlots.some(
                              (slot) => slot.day === day.toDateString() && slot.time === time
                            )
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => !isPastDay(day) && !isSlotBooked(day, time) && handleSelectSlot(day, time)}
                      disabled={isPastDay(day) || isSlotBooked(day, time)}
                    >
                      {time}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="save-section">
          <button
            className={"moth__button"}
            onClick={handleSaveBookings}
            disabled={selectedSlots.length === 0}
          >
            Записаться на занятия
          </button>
        </div>

        <div className="bookings">
          <h2>Мои записи</h2>
          {trainingsInfo.length === 0 ? (
            <p>Записей пока нет</p>
          ) : (
            <ul>
              {trainingsInfo.map((booking, index) => (
                <li key={index}>
                  {new Date(booking.startTime).toLocaleDateString("ru", { weekday: "long" })}{" "}
                  {new Date(booking.startTime).toLocaleDateString("ru", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  - {new Date(booking.startTime).toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
