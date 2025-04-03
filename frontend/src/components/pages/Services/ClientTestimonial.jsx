import React from "react";
import PLODOVI_IMG from "../../../assets/images/plodovi.png";

export default function ClientTestimonial() {
  return (
    <section class="pb-32">
      <div class="max-layout-container">
        {/* heading and subheading */}
        <h5
          className="uppercase text-center mb-4 text-[#4f565e] font-semibold text-lg"
          style={{ letterSpacing: "0.1em" }}
        >
          Client testimonials
        </h5>
        <div className="text-center font-bold">
          <h3 className="mb-10 text-primary text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h3>
        </div>

        {/* testimonials */}
        {/* DESKTOP - TESTIMONIAL */}
        <div class="testimonial hidden md:flex justify-center mt-24 py-10 px-10 bg-[#d9e5f1] rounded-xl mb-5">
          <div class="relative w-9/12">
            <span class="text-[70px] text-primary absolute left-8 top-0 z-10">
              "
            </span>
            <p class="text-xl text-[#4f565e] px-20 py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos
              consectetur fuga sit vero dolor incidunt esse facilis tempora
              perferendis quidem pariatur veniam minus, cum fugiat debitis.
              Reiciendis, porro autem!
            </p>
            <span class="text-[70px] text-primary absolute right-8 bottom-1">
              "
            </span>
            <div class="px-20 flex flex-col">
              <span class="font-bold">John Doe</span>
              <span>CEO of Plodovi d.o.o.</span>
            </div>
          </div>
          <div class="w-3/12 flex items-center border-l-2 border-primary">
            <div class="p-10 pl-8">
              <img src={PLODOVI_IMG} alt="" />
            </div>
          </div>
        </div>

        {/* MOBILE - TESTIMONIAL */}
        <div class="visible md:hidden bg-[#d9e5f1] rounded-xl">
          <div class="flex flex-col pt-4">
            <div class="flex flex-col gap-2">
              <span class="text-[40px] h-6 text-primary pl-2 mb-2">"</span>
              <p class="text-xl text-[#4f565e] !text-[16px] px-5 py-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                quos consectetur fuga sit vero dolor incidunt esse facilis
                tempora perferendis quidem pariatur veniam minus, cum fugiat
                debitis. Reiciendis, porro autem!
              </p>
              <span class="text-[40px] text-primary h-6 flex justify-end pr-2">
                "
              </span>
            </div>
            <div class="px-5 text-center pb-5 flex flex-col">
              <span class="font-bold">John Doe</span>
              <span>CEO of Plodovi d.o.o.</span>
            </div>
          </div>
          <div class="border-t-[1px] mx-[20px] border-primary">
            <div class="p-10 pl-8">
              <img src={PLODOVI_IMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
