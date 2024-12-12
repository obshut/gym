import React, {useState} from "react";
import './header.css';
import './header_media.css';
import {NavLink} from "react-router-dom";
import Modal from 'react-modal';

const Header = () => {

    const [nameError, setNameError] = useState('');
    const [telError, setTelError] = useState('');
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const role = localStorage.getItem('role')
    const NameChange = (e) => {
        const pattern = /^[а-яА-Я\s]+$/;
        if (!pattern.test(e.target.value)) {
            setNameError('Пожалуйста, используйте только кириллицу.');
        } else {
            e = setName(e.target.value)
            setNameError('');
        }
    };

    const TelChange = (e) => {
        const pattern = /^[+0-9]+$/;
        if (!pattern.test(e.target.value)) {
            setTelError('Пожалуйста, используйте только цифры.');
        } else {
            e = setTel(e.target.value)
            setTelError('');
        }
    };


    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const Submit2 = async (e) => {
        e.preventDefault();
        const newApplication = {
            name,
            tel,
        }

        await fetch('https://fitnes-be743-default-rtdb.europe-west1.firebasedatabase.app/application.json', {
            method: 'POST',
            body: JSON.stringify(newApplication),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(`Спасибо за оставленную заявку. С вами свяжется наш сотрудник в ближайшее время.`);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setName('');
        setTel('');
    };


    const modalContent2 = (
        <div className={"feedback__div"}>
            <div style={{
                display: "flex",
                borderRadius: 12,
                width: 430,
                backgroundColor: "rgba(255,255,255,0.4)",
                height: 330
            }}>
                <button
                    style={{
                        width: 30,
                        height: 30,
                        background: 'bottom',
                        fontWeight: 600,
                        border: 0,
                        cursor: "pointer",
                        position: 'absolute'
                    }} onClick={closeModal2}>
                    X
                </button>
                <div style={{
                    width: '100%'
                }}>
                    <form className={"feedback__form2"} onSubmit={Submit2}>
                        <input
                            className={"feedback__input"}
                            type={"text"}
                            value={name}
                            placeholder={"Напишите ваше ФИО"}
                            required
                            onChange={NameChange}
                        />
                        {nameError && <p style={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}>{nameError}</p>}
                        <input
                            className={"feedback__input input"}
                            type={"tel"}
                            value={tel}
                            placeholder={"+375 "}
                            pattern={"^[+0-9]+$"}
                            minLength={12}
                            required
                            onChange={TelChange}
                        />
                        {telError && <p style={{
                            color: 'black',
                            fontFamily: 'Montserrat'
                        }}>{telError}</p>}
                        <button className={"bid"} type="submit">Оставить заявку на звонок</button>
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        <header className={"header"}>
            <div className="line">
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                    </label>
                    <ul className="menu__box">
                        <li>
                            <NavLink
                                className={"menu__item"}
                                style={{
                                    color: "#333",
                                    textDecoration: 'none'
                                }} to={"/"}>
                                Начало
                            </NavLink>
                        </li>
                        <li className={'menu__item'}>
                            <NavLink style={{
                                color: "#333",
                                textDecoration: 'none',
                            }} to={"/home"}>
                                О Клубе
                            </NavLink>
                        </li>
                        <li className={'menu__item'}>
                            <NavLink style={{
                                color: "#333",
                                textDecoration: 'none',
                            }} to={"/services"}>
                                Услуги
                            </NavLink>
                        </li>
                        {role !== 'TRAINER' && (
                        <li
                            className={'call'}
                            onClick={openModal2}>
                            Оставить заявку на звонок
                        </li>
                        )}
                        <Modal
                            className={"window"}
                            isOpen={modalIsOpen2}
                            onRequestClose={closeModal2}>
                            {modalContent2}
                        </Modal>
                    </ul>
                </div>
            </div>
            <div className="logo">
                <NavLink style={{
                    textDecoration: 'none',
                    color: '#33b0aa',
                }} to={"/home"}>m o r e o n <span className={"fitnes"}>F I T N E S</span>
                </NavLink>
            </div>
            <div className="novigation">
                <ul className={"spisok"}>

                    <li className={'aboutClub'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/home"}>
                            О Клубе
                        </NavLink>
                    </li>

                    <li className={'galerey'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/services"}>
                            Услуги
                        </NavLink>
                    </li>

                    {role == 'TRAINER' && (
                    <li className={'galerey'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/statistic"}>
                            Статистика
                        </NavLink>
                    </li>
                    )}

                    {role == 'TRAINER' && (
                    <li className={'records'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/records"}>
                            Мои записи
                        </NavLink>
                    </li>
                    )}

                    {role !== 'TRAINER' && (
                        <li
                            className={'call'}
                            onClick={openModal2}>
                            Оставить заявку на звонок
                        </li>
                        )}
                    <Modal
                        className={"window"}
                        isOpen={modalIsOpen2}
                        onRequestClose={closeModal2}>
                        {modalContent2}
                    </Modal>

                    <li className={'galerey'}>
                        <NavLink style={{
                            textDecoration: 'none',
                        }} className={"nav-club"}
                                 to={"/"}>
                            Выход
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;