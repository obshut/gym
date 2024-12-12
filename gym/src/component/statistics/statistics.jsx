  import React, {useEffect, useState} from "react";
  import {NavLink, useLocation} from "react-router-dom";
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const Statistic = () => {

      const [data, setData] = useState([]);
      const [transformedData, setTransformedData] = useState([]);

      const {pathname} = useLocation();
      const token = localStorage.getItem('token')
      useEffect(() => {
          window.scrollTo(0, 0);
          fetch('http://localhost:8080/analytic', {
              method: 'GET',
              headers: {
                  'Authorization': token, 
                  'Content-Type': 'application/json'
              }
          })
          .then(response => response.json())
          .then(data1 => {         
              setData(data1);
              setTransformedData(transformData(data1));
          })
          .catch(error => {
              console.error('Ошибка построения графика:', error);
          });
          
          

      }, [pathname]);

      const transformData = (dataMap) => {
          // Преобразуем данные в массив с датами и значениями для каждой категории
          const categories = Object.keys(dataMap);
          const dates = Object.keys(dataMap[categories[0]]); // предполагаем, что все категории имеют одинаковые даты
          
          // Преобразуем данные в массив объектов с датами и значениями для каждой категории
          return dates.map(date => {
            const dataPoint = { date };
            categories.forEach(category => {
              dataPoint[category] = dataMap[category][date] || 0;
            });
            return dataPoint;
          });
        };


        const colors = [
          '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57', '#8dd1e1', 
          '#83a6ed', '#8884d8', '#8a2be2', '#dc143c', '#00ced1', '#ff69b4'
        ];


      return(

  <ResponsiveContainer width="90%" height={400} style={{
      margin: "0 auto",
      marginTop: 50,
      marginBottom: 50
  }}>
        <LineChart data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(data).map((category, index) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[index % colors.length]} // Назначаем цвет из массива, повторяем если цветов не хватает
            activeDot={{ r: 8 }}
          />
        ))}
        </LineChart>
      </ResponsiveContainer>
        
      )
  }

  export default Statistic