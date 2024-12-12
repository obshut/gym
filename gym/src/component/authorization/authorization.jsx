import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./authorization.css";

const Authorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Проверка на пустые поля
        if (email === '' || password === '') {
            setError('Пожалуйста, заполните все поля.');
            return;
        }

        // Очистка ошибок перед отправкой данных
        setError(null);

        try {
            // Отправка данных на сервер
            const response = await fetch('http://localhost:8080/auth/signIn', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ email, password })
            })
            
            
            // Проверка ответа от сервера
            if (response.ok) {
                const data = await response.json();
                
                const { userDto } = data;
                const { token } = data;
                const { userId } = userDto; 
                const { role } = userDto; 
                console.log('Авторизация успешна:', data);
                console.log('Авторизация успешна:', userId);
                localStorage.setItem('id', userId);
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);

                history.push('/home'); 
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Неверный email или пароль.');
            }
        } catch (error) {
            setError('Ошибка сети. Попробуйте позже.');
        }
    };

    return (
        <div className={"authorization"}>
            <div className={"auth__div"}>
                <div className={"auth__container"}>
                    <form onSubmit={handleSubmit} className={"auth__form"}>
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
                        <div className="registration__button">
                            <NavLink className={"text__decoration"} to={"/registration"}>
                                Регистрация
                            </NavLink>
                        </div>
                        <button type="submit" className={"button button__entrance"}>Войти</button>
                    </form>

                    {error && <div className={"error__message"}>{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default Authorization;
