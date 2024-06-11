import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



import Topvector from '../assets/images/webp/Vector10.webp'
import Bottomvector from '../assets/images/webp/Vector11.webp'
import Sliderimg1 from '../assets/images/webp/slider1.webp'
import Sliderimg2 from '../assets/images/webp/slider2.webp'
import Sliderimg3 from '../assets/images/webp/slider3.webp'
import Sliderimg4 from '../assets/images/webp/slider4.webp'
import Sliderimg5 from '../assets/images/webp/slider5.webp'


const Work = () => {












  return (
    <section className='bg-orange'>
      <img src={Topvector} alt="vevter" className='w-100' />
      <div className="mycontainer">
        <h2 className='mb-0 text-white font-titlingGothic fw-bold fs-48 lh-57 text-center '>See Our Latest Work</h2>
        <div className="slider pt-57 pb-71"></div>
        <div className="pt-57 pb-71 d-none ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide class="swiper-slide gallery-slide">
              <img src={Sliderimg1} alt="" />

            </SwiperSlide>
            <SwiperSlide class="swiper-slide gallery-slide">
              <img src={Sliderimg2} alt="" />


            </SwiperSlide>
            <SwiperSlide class="swiper-slide gallery-slide">
              <img src={Sliderimg3} alt="" />


            </SwiperSlide>
            <SwiperSlide class="swiper-slide gallery-slide">
              <img src={Sliderimg4} alt="" />


            </SwiperSlide>
            <SwiperSlide class="swiper-slide gallery-slide">
              <img src={Sliderimg5} alt="" />


            </SwiperSlide>
            ...
          </Swiper>







        </div>
      </div>
      <img src={Bottomvector} alt="vector" className='w-100' />
    </section>

  )
}

export default Work