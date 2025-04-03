import React from "react";
import HANDSHAKE_IMG from "../../../assets/images/handshake.png";
import SOLUTION_IMG from "../../../assets/images/solution.png";

export default function Section2() {
  return (
    <section class="py-32">
      {/* Top container */}
      <div class="max-layout-container">
        <h5
          className="uppercase text-center mb-4 text-[#4f565e] font-semibold text-lg"
          style={{ letterSpacing: "0.1em" }}
        >
          Lorem Ipsum
        </h5>
        <div className="text-center font-bold">
          <h3 className="mb-10 text-primary text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h3>
        </div>
        <div class="description">
          <p class="mb-5 text-xl text-[#4f565e]">
            Our modular approach to business process design and operations
            management means that stability, flexibility, and customization are
            built into every solution. We combine industry-specific knowledge
            with proven process design strategies, and an organizational
            platform that will have your business humming like a well oiled
            machine.
          </p>
          <p class="text-xl text-[#4f565e]">
            Our modular approach to business process design and operations
            management means that stability, flexibility, and customization are
            built into every solution. We combine industry-specific knowledge
            with proven process design strategies, and an organizational
            platform that will have your business humming like a well oiled
            machine.
          </p>
        </div>
      </div>

      {/* Second container */}
      <div class="max-layout-container border-b-[1px] border-solid border-primary">
        <div class="flex flex-col mt-24 mb-32 gap-20">
          <div class="flex flex-col md:flex-row gap-20">
            <div>
              <img src={HANDSHAKE_IMG} alt="" class="h-20" />

              <div class="pt-6">
                <h4 class="py-3 text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet
                </h4>
                <p class="text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  alias nemo voluptatem molestias.
                </p>
              </div>
            </div>
            <div>
              <img src={HANDSHAKE_IMG} alt="" class="h-20" />

              <div class="pt-6">
                <h4 class="py-3 text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet
                </h4>
                <p class="text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  alias nemo voluptatem molestias.
                </p>
              </div>
            </div>
            <div>
              <img src={HANDSHAKE_IMG} alt="" class="h-20" />

              <div class="pt-6">
                <h4 class="py-3 text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet
                </h4>
                <p class="text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  alias nemo voluptatem molestias.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-20">
            <div>
              <img src={SOLUTION_IMG} alt="" class="h-20" />

              <div class="pt-6">
                <h4 class="py-3 text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet
                </h4>
                <p class="text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  alias nemo voluptatem molestias.
                </p>
              </div>
            </div>
            <div>
              <img src={SOLUTION_IMG} alt="" class="h-20" />

              <div class="pt-6">
                <h4 class="py-3 text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet
                </h4>
                <p class="text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  alias nemo voluptatem molestias.
                </p>
              </div>
            </div>
            <div>
              <img src={SOLUTION_IMG} alt="" class="h-20" />

              <div class="pt-6">
                <h4 class="py-3 text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet
                </h4>
                <p class="text-[#4f565e] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  alias nemo voluptatem molestias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
