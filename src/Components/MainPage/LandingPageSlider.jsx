import React, { useState } from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { musicGalleryImages } from '../../Data/MusicGalleryData';

const LandingPageSlider = () => {
    return (
        <>
            <div className="landing_page_slider_elements">
                <div className="slider_box">
                    <Swiper
                        loop={true}
                        navigation={true}
                        spaceBetween={10}
                        modules={[Navigation, Thumbs, Pagination]}
                        grabCursor={true}
                        loopFillGroupWithBlank={true}
                        className="landing_page_slider_images"
                    >
                        {
                            musicGalleryImages.map((items) => {
                                return (
                                    <SwiperSlide key={items.id}>
                                        <div className="landing_swiper_slide">
                                            <img src={items.img} alt="" />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default LandingPageSlider;


