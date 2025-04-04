import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const baseURL = "http://45.76.23.70:1337";

const Section8 = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=home`,
    `populate[sections][on][section.section8][populate][cards][populate]=icon`,
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
    <div className="slider-container bg-[#F5F5F5] flex flex-col justify-center py-16 lg:py-32">
  <div className="max-layout-container flex flex-col justify-center">
    <p className="font-nunito font-normal text-lg leading-6 tracking-normal text-center uppercase text-[#4F565E]">
      {page?.title}
    </p>
    <p className="font-nunito font-medium text-3xl lg:leading-[40px] tracking-normal text-center text-primary max-w-[754px] mx-auto mt-5">
      {page?.subTitle}
    </p>
    <p className="font-dm font-normal text-xl leading-[30px] tracking-normal mt-5 lg:max-w-[80%] mx-auto mb-14 text-center">
      {page?.description}
    </p>
  </div>

  <div className="relative px-4 lg:px-0">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1.1}
      slidesPerGroup={1}
      centeredSlides={false}
      allowSlidePrev={true}
      allowSlideNext={true}
      watchOverflow={false}
      navigation={{
        nextEl: ".section8 .swiper-button-next",
        prevEl: ".section8 .swiper-button-prev",
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination2",
      }}
      breakpoints={{
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
      }}
      className="mySwiper ml-2 lg:ml-40"
    >
      {page?.cards?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex bg-white p-6 lg:p-8 shadow-lg min-h-[380px] h-full">
            <div className="flex flex-col justify-between w-full">
              <div>
                <img
                  src={`${baseURL}${slide?.icon?.url}`}
                  alt="Icon"
                  className="w-6 h-6 mb-4"
                />
                <p className="font-nunito font-normal text-base leading-[26px] tracking-[-0.04em] text-[#4F565E]">
                  {slide.description}
                </p>
              </div>
              <p className="font-nunito font-medium text-xl leading-8 tracking-[-0.04em] text-primary mt-6">
                {slide.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Pagination visible on all screens */}
  {/* Controls wrapper */}
<div className="w-full flex flex-col items-center mt-8">
  {/* Pagination (always visible) */}
  <div className="swiper-pagination2 flex flex-row justify-center" />

  {/* Navigation buttons (only on lg and up) */}
  <div className="section8 hidden lg:flex justify-center space-x-4 mt-4">
    <div className="swiper-button-prev section8-prev px-4 py-2 rounded-full cursor-pointer border-2 border-primary" />
    <div className="swiper-button-next section8-next px-4 py-2 rounded-full cursor-pointer border-2 border-primary" />
  </div>
</div>
</div>
  );
};

export default Section8;
