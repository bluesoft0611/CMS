// SliderComponent.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const baseURL = "http://45.76.23.70:1337";

const SliderComponent = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=home`,
    `populate[sections][on][section.section2][populate][cards][populate]=image`,
  ].join("&");

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data[0];
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  return (
    <div className="slider-container bg-primary flex flex-col justify-center py-16 lg:py-32">
      <h2 class="font-nunito font-medium text-3xl lg:text-[50px] leading-[60px] tracking-normal text-center text-white">
        {page?.title}
      </h2>
      <p class="font-dm font-normal text-base lg:text-lg leading-[26px] tracking-normal text-center w-[90%] lg:w-[60%] mx-auto text-white my-5">
        {page?.description}
      </p>

      <div class="swiper-container">
        <div class="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={false}
            navigation={{
              nextEl: ".section2 .swiper-button-next",
              prevEl: ".section2 .swiper-button-prev",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            breakpoints={{
              1280: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
            }}
            
            className="mySwiper ml-2 lg:ml-40"
          >
            {page?.cards?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col-reverse lg:flex-row bg-white p-4 shadow-lg h-full min-h-[430px]">
                  
                  {/* Text Section – 65% on large screens */}
                  <div className="p-4 lg:p-8 flex flex-col justify-around lg:basis-[65%]">
                    <p className="font-nunito font-bold text-lg lg:text-[24px] lg:leading-[40px] tracking-normal max-w-[500px]">
                      {slide?.title}
                    </p>
                    <p className="font-dm font-normal text-[16px] leading-[26px] tracking-normal">
                      {slide?.description}
                    </p>
                  </div>
              
                  {/* Image Section – 35% on large screens */}
                  <div className="flex items-center justify-center lg:items-end lg:justify-end lg:basis-[35%]">
                    <div className="w-full max-w-[383px] h-[413px]">
                      <img
                        src={`${baseURL}${slide?.image?.url}`}
                        alt="Slide"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* original */}
        {/* <div className="swiper-pagination mt-4 flex justify-start"></div>
        <div className="section2 flex justify-end space-x-4 mt-4">
          <div className="swiper-button-prev bg-gray-200 px-4 py-2 rounded-lg cursor-pointer"></div>
          <div className="swiper-button-next bg-gray-200 px-4 py-2 rounded-lg cursor-pointer"></div>
        </div> */}

        {/* tried */}
        <div className="swiper-controls mt-6 flex items-center justify-between flex-wrap px-4 lg:px-20">
          <div className="swiper-pagination"></div>
          <div className="section2 flex space-x-4 mt-4 lg:mt-0">
            <div className="swiper-button-prev px-4 py-2 rounded-full cursor-pointer border border-white"></div>
            <div className="swiper-button-next px-4 py-2 rounded-full cursor-pointer border border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
