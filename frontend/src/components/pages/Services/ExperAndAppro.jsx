import React from "react";
import { LuArrowRight } from "react-icons/lu";

export default function ExpertAndApproach() {
  return (
    <section class="mb-14 md:mb-32">
      {/* Our Expertise */}
      <div
        class="max-layout-container flex flex-col md:flex-row gap-8"
        id="our-expertise"
      >
        <div class="w-full h-[300px] md:h-auto bg-img bg-cover bg-center" />
        <div class="flex flex-col gap-10 w-full">
          <div>
            <h5
              className="uppercase mb-4 text-[#4f565e] font-semibold text-lg"
              style={{ letterSpacing: "0.1em" }}
            >
              OUR EXPERTISE
            </h5>
            <div className="font-bold">
              <h3 className="mb-10 text-primary text-3xl">
                A Comprehensive Suite of Core Business Process Capabilities
                Designed for Innovation, Customization, and Results.
              </h3>
            </div>
            <p class="text-xl text-[#4f565e]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              cupiditate accusamus doloremque distinctio officiis omnis, dolore
              ad dolores aspernatur molestias optio obcaecati. Quam esse aperiam
              earum repellendus ut numquam mollitia! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dicta aliquam deleniti mollitia
              laboriosam debitis sunt nam, provident saepe quasi voluptatem
              harum quam. Cumque doloremque facere nobis fugit adipisci ex
              porro? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Velit neque cum dignissimos placeat repellat similique cumque
              magnam perferendis nulla soluta, minus, quasi tenetur voluptates
              commodi. Aperiam et impedit dolorum earum?
            </p>
          </div>
          <div class="flex flex-1 items-center">
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-3 text-lg font-bold">
                <span class="text-primary text-[24px]">
                  <LuArrowRight className="w-6 h-6" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li class="flex items-center gap-3 text-lg font-bold">
                <span class="text-primary text-[24px]">
                  <LuArrowRight className="w-6 h-6" />
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores labore perspiciatis, eum et assumenda nisi distinctio
                magnam ipsa
              </li>
              <li class="flex items-center gap-3 text-lg font-bold">
                <span class="text-primary text-[24px]">
                  <LuArrowRight className="w-6 h-6" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda sit non culpa nulla, labore.
              </li>
              <li class="flex items-center gap-3 text-lg font-bold">
                <span class="text-primary text-[24px]">
                  <LuArrowRight className="w-6 h-6" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                fugiat inventore delectus optio, iure.
              </li>
              <li class="flex items-center gap-3 text-lg font-bold">
                <span class="text-primary text-[24px]">
                  <LuArrowRight className="w-6 h-6" />
                </span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div
        class="max-layout-container flex-col-reverse md:flex-row flex gap-8 pt-14 md:pt-32"
        id="our-approach"
      >
        <div class="flex flex-col w-full">
          <div>
            <h5
              className="uppercase mb-4 text-[#4f565e] font-semibold text-lg"
              style={{ letterSpacing: "0.1em" }}
            >
              OUR APPROACH
            </h5>
            <div className="font-bold">
              <h3 className="mb-10 text-primary text-3xl">
                A Comprehensive Suite of Core Business Process Capabilities
                Designed for Innovation, Customization, and Results.
              </h3>
            </div>
            <p class="text-xl text-[#4f565e]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              cupiditate accusamus doloremque distinctio officiis omnis, dolore
              ad dolores aspernatur molestias optio obcaecati. Quam esse aperiam
              earum repellendus ut numquam mollitia! .Aperiam et impedit dolorum
              earum?
            </p>
          </div>
          <div class="flex flex-1 justify-center xs:py-10 py-14">
            <button class="bg-yellow-400 text-black text-base px-10 py-2 rounded font-semibold">
              Find out more
            </button>
          </div>
        </div>
        <div class="w-full h-[300px] md:h-auto bg-img bg-cover bg-left-top" />
      </div>
    </section>
  );
}
