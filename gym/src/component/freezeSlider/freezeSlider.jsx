import action1 from "../../img/freeze1.png"
import action2 from "../../img/freeze2.png"
import action3 from "../../img/freeze3.png"
import action4 from "../../img/freeze4.png"
import action5 from "../../img/freeze5.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './freezeSlider.css'


const Slider = () => {
    return (
        <div className={"swiper__div"}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img className={"freeze__slide"} src={action1} alt={"#"}/></SwiperSlide>
                {/*<SwiperSlide><img className={"freeze__slide"} src={action2} alt={"#"}/></SwiperSlide>*/}
                <SwiperSlide><img className={"freeze__slide"} src={action3} alt={"#"}/></SwiperSlide>
                <SwiperSlide><img className={"freeze__slide"} src={action4} alt={"#"}/></SwiperSlide>
                <SwiperSlide><img className={"freeze__slide"} src={action5} alt={"#"}/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
