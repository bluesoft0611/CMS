import React from "react";
import LOGO_IMG from "../../assets/svg/logo2white.svg";

export default function HelperSec() {
  return (
    <section
      class="bg-flex-bg bg-cover bg-center bg-no-repeat py-24"
      id="helper-sec"
    >
      <div class="max-layout-container text-white text-center">
        <h5
          class="mb-4 font-semibold text-lg uppercase"
          style={{ letterSpacing: "0.1em" }}
        >
          LOREM IPSUM
        </h5>
        <h1 class="mb-14 text-[38px] md:text-[56px] font-bold md:max-w-[1240px] mx-auto leading-[43px] md:leading-none">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
      </div>
    </section>
  );
}

export function OurPartners() {
  return (
    <section
      class="bg-flex-bg bg-cover bg-center bg-no-repeat py-24 my-24"
      id="helper-sec"
    >
      <div class="max-layout-container text-white text-center">
        <h5
          class="xs:mb-8 mb-14 font-semibold text-lg uppercase"
          style={{ letterSpacing: "0.1em" }}
        >
          Our partners
        </h5>
        <div class="flex xs:flex-row xs:justify-center xs:flex-wrap xs:gap-y-8 xs:gap-x-4 gap-7 min-w-full">
          <div class="logo-wrapper xs:w-[47%] w-1/5 cursor-pointer">
            <img src={LOGO_IMG} alt="" />
          </div>
          <div class="logo-wrapper xs:w-[47%] w-1/5 cursor-pointer">
            <img src={LOGO_IMG} alt="" />
          </div>
          <div class="logo-wrapper xs:w-[47%] w-1/5 cursor-pointer">
            <img src={LOGO_IMG} alt="" />
          </div>
          <div class="logo-wrapper xs:w-[47%] w-1/5 cursor-pointer">
            <img src={LOGO_IMG} alt="" />
          </div>
          <div class="logo-wrapper xs:w-[47%] w-1/5 cursor-pointer">
            <img src={LOGO_IMG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
