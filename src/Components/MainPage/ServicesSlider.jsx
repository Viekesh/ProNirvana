import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./ServicesSlider.scss";

import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { servicesImages } from '../../Data/MusicGalleryData';

const ServicesSlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className='services_slider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                >
                    {
                        servicesImages.map((imgs, id) => {
                            return (
                                <SwiperSlide key={id.id}>
                                    <div className="service_slider_images">
                                        <img src={imgs.img} alt="img" />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

export default ServicesSlider;


