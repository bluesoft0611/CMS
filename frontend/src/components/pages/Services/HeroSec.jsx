import React from "react";
import HERO_IMG from "../../../assets/images/processdesign-min.jpg";

export default function HeroSec() {
  return (
    <div className="py-14 md:py-24 tiles-section" id="services-hero">
      <div className="max-layout-container">
        <div className="flex flex-col justify-center items-center">
          <h5
            className="uppercase text-center mb-4 text-[#4f565e] font-semibold text-lg"
            style={{ letterSpacing: "0.1em" }}
          >
            Lorem Ipsum
          </h5>
          <div className="text-center max-w-3xl font-bold">
            <h3 className="mb-10 text-primary text-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
          </div>
          <div className="description">
            <p className="mb-5 text-xl text-[#4f565e]">
              Our modular approach to business process design and operations
              management means that stability, flexibility, and customization
              are built into every solution. We combine industry-specific
              knowledge with proven process design strategies, and an
              organizational platform that will have your business humming like
              a well oiled machine.
            </p>
          </div>

          {/* Content */}
          <div class="mt-10 md:mt-24">
            <div class="tiles-wrapper flex flex-col gap-12">
              <div class="row flex-col md:flex-row">
                <a class="tile">
                  <div class="select-none h-[184px] md:h-full overflow-hidden">
                    <div class="img-wrapper static h-full object-cover">
                      <img
                        src={HERO_IMG}
                        alt=""
                        class="h-full w-full brightness-110"
                      />
                    </div>
                    <div class="hide-on-hover">
                      <div class="tile-heading">
                        <h4 className="text-base md:text-lg">lorem ipsum</h4>
                        <h3 className="text-xl md:text-3xl">dolor sit amet</h3>
                      </div>
                    </div>
                    <div class="show-on-hover">
                      <h4 className="text-white text-[22px] md:text-[26px]">
                        lorem ipsum
                      </h4>
                      <p className="text-white text-base md:text-[22px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nostrum eveniet aperiam.
                      </p>
                      <div class="btn-wrapper">
                        <button class="font-bold px-3 md:px-10 py-[6px] md:py-[9px] bg-[#6d9fcb] text-white border transition-all text-sm md:text-base">
                          Lorem Btn
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="tile">
                  <div class="select-none h-[184px] md:h-full overflow-hidden">
                    <div class="img-wrapper static h-full object-cover">
                      <img
                        src={HERO_IMG}
                        alt=""
                        class="h-full w-full brightness-110"
                      />
                    </div>
                    <div class="hide-on-hover">
                      <div class="tile-heading">
                        <h4 className="text-base md:text-lg">lorem ipsum</h4>
                        <h3 className="text-xl md:text-3xl">dolor sit amet</h3>
                      </div>
                    </div>
                    <div class="show-on-hover">
                      <h4 className="text-white text-[22px] md:text-[26px]">
                        lorem ipsum
                      </h4>
                      <p className="text-white text-base md:text-[22px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nostrum eveniet aperiam.
                      </p>
                      <div class="btn-wrapper">
                        <button class="font-bold px-3 md:px-10 py-[6px] md:py-[9px] bg-[#6d9fcb] text-white border transition-all text-sm md:text-base">
                          Lorem Btn
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="row flex-col md:flex-row">
                <a class="tile">
                  <div class="select-none h-[184px] md:h-full overflow-hidden">
                    <div class="img-wrapper static h-full object-cover">
                      <img
                        src={HERO_IMG}
                        alt=""
                        class="h-full w-full brightness-110"
                      />
                    </div>
                    <div class="hide-on-hover">
                      <div class="tile-heading">
                        <h4 className="text-base md:text-lg">lorem ipsum</h4>
                        <h3 className="text-xl md:text-3xl">dolor sit amet</h3>
                      </div>
                    </div>
                    <div class="show-on-hover">
                      <h4 className="text-white text-[22px] md:text-[26px]">
                        lorem ipsum
                      </h4>
                      <p className="text-white text-base md:text-[22px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nostrum eveniet aperiam.
                      </p>
                      <div class="btn-wrapper">
                        <button class="font-bold px-3 md:px-10 py-[6px] md:py-[9px] bg-[#6d9fcb] text-white border transition-all text-sm md:text-base">
                          Lorem Btn
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="tile">
                  <div class="select-none h-[184px] md:h-full overflow-hidden">
                    <div class="img-wrapper static h-full object-cover">
                      <img
                        src={HERO_IMG}
                        alt=""
                        class="h-full w-full brightness-110"
                      />
                    </div>
                    <div class="hide-on-hover">
                      <div class="tile-heading">
                        <h4 className="text-base md:text-lg">lorem ipsum</h4>
                        <h3 className="text-xl md:text-3xl">dolor sit amet</h3>
                      </div>
                    </div>
                    <div class="show-on-hover">
                      <h4 className="text-white text-[22px] md:text-[26px]">
                        lorem ipsum
                      </h4>
                      <p className="text-white text-base md:text-[22px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nostrum eveniet aperiam.
                      </p>
                      <div class="btn-wrapper">
                        <button class="font-bold px-3 md:px-10 py-[6px] md:py-[9px] bg-[#6d9fcb] text-white border transition-all text-sm md:text-base">
                          Lorem Btn
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
