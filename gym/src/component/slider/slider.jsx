import action1 from "../../img/action1.png"
import action2 from "../../img/action2.png"
import action3 from "../../img/action3.png"
import action4 from "../../img/t.png"
import action5 from "../../img/t2.png"
import action6 from "../../img/t3.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "./slider.css"
import "./slider_media.css";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";


const Slider = () => {
    return (
        <div className={"swiper__div"}>
            <h2 className={"stock"}>Акции</h2>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            navigation
            slidesPerView={2}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide><img className={"slide"} src={action1} alt={"#"}/></SwiperSlide>
            <SwiperSlide><img className={"slide"} src={action2} alt={"#"}/></SwiperSlide>
            <SwiperSlide><img className={"slide"} src={action3} alt={"#"}/></SwiperSlide>
            <SwiperSlide><img className={"slide"} src={action4} alt={"#"}/></SwiperSlide>
            <SwiperSlide><img className={"slide"} src={action5} alt={"#"}/></SwiperSlide>
            <SwiperSlide><img className={"slide"} src={action6} alt={"#"}/></SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Slider;
