import React from "react";
import EMPOWER_IMG from "../../../assets/images/ofmflex.jpg";

export default function Empowering() {
  return (
    <div className="py-14">
      <section class="max-layout-container">
        <div class="flex flex-col md:flex-row text-center gap-8 items-center">
          <div class="w-full bg-flex-img bg-cover bg-center xs:h-[300px]">
            <div class="h-80 w-full">
              <img
                src={EMPOWER_IMG}
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="w-full">
            <h4 class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-blue-200 tracking-wider uppercase font-extrabold text-[26px]">
              Rethink, Reimagine, Reinvent
            </h4>
            <h4 className="text-[26px]">
              Empowering Your Business for Success
            </h4>

            <h5 class="mx-auto pt-8 text-[22px]">
              Officemotive helps businesses perform better by redesigning and{" "}
              <b>optimizing business processes</b>
              with smart,
              <b>technology-driven solutions</b>, guided by human insight,
              powered by
              <b>proven best practices</b>.
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
}
