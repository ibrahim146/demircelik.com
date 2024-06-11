import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import resim from "../galeriimage/ofisimages7.jpeg";
import resim1 from "../galeriimage/ofisimages.jpeg";
import resim2 from "../galeriimage/ofisimages2.jpeg";
import resim3 from "../galeriimage/ofisimages3.jpeg";
import resim4 from "../galeriimage/ofisimages4.jpeg";
import resim5 from "../galeriimage/ofisimages5.jpeg";
import resim6 from "../galeriimage/ofisimages2.jpeg";
import resim7 from "../galeriimage/ofisimages8.jpg";
import resim8 from "../galeriimage/ofisimages9.jpg";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../galeri.css';

export default function Galerimiz1() {
    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>OFİS GRUBU</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={resim} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ backgroundPositionX: "-50px" }} src={resim7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={resim8} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
