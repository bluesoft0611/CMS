import React, { useEffect, useState } from "react";
import { Constant } from "../../helper/constant";

const { homeSlides } = Constant;

const duration = 6000;

const HeroSec = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const setSlide = (slide) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setActiveSlide(slide);
  };

  const createInterval = () => {
    const id = setInterval(() => {
      setSlide((prevActiveSlide) => (prevActiveSlide + 1) % homeSlides.length);
    }, duration);
    setIntervalId(id);
  };

  useEffect(() => {
    createInterval();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div
      id="hero"
      className="hero relative h-[60vh] max-h-[650px] pt-12 pb-4 lg:pt-0 xl:pb-12"
    >
      {/* Content */}
      <div className="max-layout-container flex px-4 flex-col justify-center h-full">
        {/* details */}
        <div className="flex xs:pt-8 max-w-[45pc] lg:max-w-[37pc] xl:max-w-[50pc] items-center flex-col flex-1 pt-0 xl:pt-10">
          {/* Images left content */}
          {homeSlides[activeSlide] && (
            <div className="text-white duration-500 transform translate-y-0 transition-transform duration-400 ease-out hover:translate-y-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: homeSlides[activeSlide].content,
                }}
              />
            </div>
          )}
        </div>

        {/* Images */}
        {homeSlides[activeSlide] && (
          // <div className="transition-all ease-in duration-1000 hidden lg:flex img-hero absolute right-0 bottom-0 top-0 w-2/5" style={{transform: "fade"}}>
          <div
            className={`hidden lg:flex img-hero absolute right-0 bottom-0 top-0 w-2/5 transition-opacity duration-[900ms] ${
              homeSlides[activeSlide] ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={homeSlides[activeSlide]?.image}
              // className="flex opacity-90 h-full w-full object-cover hover:opacity-100 ease-in duration-300 transition-all"
              className="hidden sm:flex opacity-90 h-full w-full object-cover hover:opacity-100 ease-in duration-300 transition-all"
            />
          </div>
        )}

        {/* Navigations */}
        <div className="hero-navigation hidden lg:flex">
          <ul className="flex xl:gap-4">
            {homeSlides.map((slide, index) => (
              <li
                key={index}
                className={`hero-li ${index === activeSlide ? "active" : ""}`}
              >
                <button className="hero-link" onClick={() => setSlide(index)}>
                  {slide.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Controls */}
      <div className="mobile-hero-swiper flex md:hidden">
        <span className="active" />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default HeroSec;
