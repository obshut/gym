import React, { useState } from 'react';
import './registration.css'; // Подключаем стили для формы
import { NavLink, useHistory } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();  // Используем useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка полей на пустоту
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }

    // Очистка ошибок перед отправкой
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: 'CUSTOMER', 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Регистрация успешна:', data);
        
        history.push('/'); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Ошибка при регистрации.');
      }
    } catch (error) {
      setError('Ошибка сети. Попробуйте позже.');
    }
  };

  return (
    <div className={"registration"}>
      <div className={"register__div"}>
        <div className="register__container">

          <form onSubmit={handleSubmit} className={"register__form"}>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={"input__field"}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={"input__field"}
              required
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={"input__field"}
              required
            />
            <input
              type="password"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={"input__field"}
              required
            />
            <div className="registration__button">
              <NavLink className={"text__decoration"} to={"/"}>
                Уже есть аккаунт?
              </NavLink>
            </div>
            <button type="submit" className={"button button__entrance"}>Зарегистрироваться</button>
          </form>

          {error && <div className="error__message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Registration;
