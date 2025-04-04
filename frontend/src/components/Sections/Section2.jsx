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
    // `filters[slug][$eq]=${slug}`,
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
    <div className="slider-container bg-primary h-[866px] flex flex-col justify-center">
      <h2 class="font-nunito font-medium text-[50px] leading-[60px] tracking-normal text-center text-white">
        {page?.title}
      </h2>
      <p class="font-dm font-normal text-[16px] leading-[26px] tracking-normal text-center w-[60%] mx-auto text-white my-5">
        {page?.description}
      </p>

      <div class="swiper-container">
        <div class="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={false}
            navigation={{
              nextEl: ".section2 .swiper-button-next",
              prevEl: ".section2 .swiper-button-prev",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            breakpoints={{
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
            }}
            className="mySwiper ml-40"
          >
            {page?.cards?.map((slide, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "65%", marginRight: "20px" }}
              >
                <div className="flex bg-white p-2 shadow-lg max-h-[430px]">
                  <div className="p-14">
                    <p class="font-nunito font-bold text-[24px] leading-[40px] tracking-normal max-w-[500px]">
                      {slide?.title}
                    </p>
                    <p class="font-dm font-normal text-[16px] leading-[26px] tracking-normal align-bottom mt-20">
                      {slide?.description}
                    </p>
                  </div>
                  <img
                    src={`${baseURL}${slide?.image?.url}`}
                    alt="Slide"
                    className="w-[383px] h-[413px] p-1"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-pagination mt-4 flex justify-start"></div>
        <div className="section2 flex justify-end space-x-4 mt-4">
          <div className="swiper-button-prev bg-gray-200 px-4 py-2 rounded-lg cursor-pointer"></div>
          <div className="swiper-button-next bg-gray-200 px-4 py-2 rounded-lg cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
