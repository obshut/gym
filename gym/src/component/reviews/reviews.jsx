import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import './reviews.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../slider/slider_media.css';
import "./reviews_media.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'firebase/compat/database';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const Reviews = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const token = localStorage.getItem('token')
    const authorId = localStorage.getItem('id')
    const role = localStorage.getItem('role')

    useEffect(() => {
        fetch('http://localhost:8080/comment', {
            method: 'GET',
            headers: {
                'Authorization': token, 
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            const feedbacksList = Object.keys(data).map(id => ({
                id,                  
                authorId: data[id].authorId,  
                authorName: data[id].authorName, 
                feedback: data[id].text 
            }));
            setFeedbacks(feedbacksList);
        })
        .catch(error => {
            console.error('Ошибка при получении отзывов:', error);
        });
    }, []);


    const Submit = async (e) => {
        e.preventDefault();
        const feedbackData = {
            authorId: authorId,
            authorName: name,
            text: feedback
        };
    
        try {
            const response = await fetch('http://localhost:8080/comment', {
                method: 'POST',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(feedbackData),
            })
            .then(response => response.json())
            .then(data => {
                const feedbacksList = Object.keys(data).map(id => ({
                    id,                  
                    authorId: data[id].authorId,  
                    authorName: data[id].authorName, 
                    feedback: data[id].text 
                }));
            setFeedbacks(feedbacksList);
            setName('');
            setFeedback('');
            setModalIsOpen(false);
        });
    
        } catch (error) {
            console.error('Ошибка при отправке отзыва:', error);
        }
    };
    
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className={"feedback__div"}>
            <div className={"feedback__div2"}>
                <button
                    style={{
                        width: 30,
                        height: 30,
                        background: 'bottom',
                        fontWeight: 600,
                        border: 0,
                        cursor: "pointer",
                        position: 'absolute'
                    }} onClick={closeModal}>
                    X
                </button>
                <form className={"feedback__form"} >
                    <textarea
                        required
                        className={"feedback__textarea"}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Напишите ваш отзыв"
                    />
                    <button className={"feedback__button"} onClick={Submit}>Отправить</button>
                </form>
            </div>
        </div>
    );

    return (
        <div className={'reviews__div'}>
            <h2 className={'reviews__h2'}>Отзывы</h2>
            <div>
            {feedbacks.length === 0 ? (
                        <p style={{
                            textAlign: "center"
                        }}>Отзывов пока нет</p>
                    ):(
                        
                    
                <Swiper
                    className={"swiper_swiper"}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    navigation
                    slidesPerView={2}
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                >
                    
                    {feedbacks.map((feedback, index) => (
                        <SwiperSlide className={"slider"}
                                     key={index}>
                            <div className="reviews">
                                <div className={"feedback__name"}>
                                    <h3>{feedback.authorName}</h3>
                                </div>
                                <div className={"feedback__feedback"}>
                                    <p>{feedback.feedback}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                )}
            </div>
            {role !== 'TRAINER' && (
            <button className={"modal_button"} onClick={openModal}>Оставить отзыв</button>
            )}
            <Modal className={"window"} isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}"
            </Modal>
        </div>
    );
}

export default Reviews;