import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import resim from "../galeriimage/galeriimage20.jpeg";
import resim1 from "../galeriimage/galeriimage22.jpeg";
import resim2 from "../galeriimage/galeriimage21.jpeg";
import resim3 from "../galeriimage/galeriimage18.jpeg";
import resim4 from "../galeriimage/galeriimage11.jpeg";
import resim5 from "../galeriimage/galeriimage10.jpeg";
import resim6 from "../galeriimage/galeriimage2.jpeg";
import resim7 from "../galeriimage/galeriimage3.jpeg";
import resim8 from "../galeriimage/galeriimage4.jpeg";
import resim9 from "../galeriimage/celik_images-11.jpeg";
import resim10 from "../galeriimage/celik_images-12.jpeg";
import resim11 from "../galeriimage/celik_images-13.jpeg";
import resim12 from "../galeriimage/celik_images-14.jpeg";
import resim13 from "../galeriimage/celik_images-15.jpeg";
import resim14 from "../galeriimage/celik_images-16.jpeg";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../galeri.css';

export default function Galerimiz2() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>ÇELİK GRUBU</h1>
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
          <img src={resim2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim12} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resim13} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
