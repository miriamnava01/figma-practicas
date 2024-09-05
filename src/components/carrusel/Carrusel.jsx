import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import carrusel1 from "../../assets/image/Frame 12.png"
 
import carrusel2 from "../../assets/image/Frame 11.png"

import carrusel3 from "../../assets/image/Frame 13.png"
const Carrusel =() =>{

    return(


        <Swiper
        
        modules={[Navigation,Pagination]}
        spaceBetween={50}
        SlidesPerview={1}
        navigation ={true}
        autoplay ={{delay:3000}}  
        pagination={{clickable:true}}

        
        >
            
            <SwiperSlide> <img src= {carrusel1} /></SwiperSlide>

            <SwiperSlide> <img src= {carrusel2} /></SwiperSlide>
            <SwiperSlide> <img src= {carrusel3} /></SwiperSlide>
        </Swiper>

    )




}

export default Carrusel