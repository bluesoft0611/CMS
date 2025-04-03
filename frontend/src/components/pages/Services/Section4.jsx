import React from "react";
import { LuArrowRight } from "react-icons/lu";

const baseSection = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos distinctio expedita aperiam deleniti inventore omnis alias possimus impedit perspiciatis, consequuntur velit ut officia veniam sed pariatur aut molestias culpa!",
  items: [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores labore perspiciatis, eum et assumenda nisi distinctio magnam ipsa",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda sit non culpa nulla, labore.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat inventore delectus optio, iure.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  ],
};

const sectionData = Array.from({ length: 5 }, (_, i) => ({
  ...baseSection,
  key: `section-${i}`,
}));

export default function Section4() {
  return (
    <section className="py-14 md:py-24">
      <div className="max-layout-container px-4 flex flex-col">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <div className="md:pr-6 max-w-[610px]">
            <h5 className="uppercase mb-4 text-[#4f565e] font-semibold text-lg tracking-widest">
              Lorem Ipsum
            </h5>
            <h3 className="mb-6 text-3xl text-primary font-bold leading-snug">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <p className="text-[#4f565e] text-[20px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus natus maxime dicta fugiat, vero animi consequuntur
              facere non commodi neque nostrum veniam amet distinctio iste
              dolorum optio laborum consequatur ipsa.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex flex-col items-end mt-5 md:-mt-10">
          <div className="w-full md:w-1/2 md:pl-6 flex flex-col gap-14">
            {sectionData.map((section) => (
              <div key={section.key}>
                <h3 className="text-3xl font-bold text-[#4f565e]">
                  {section.title}
                </h3>
                <p className="text-[#4f565e] text-[20px] py-5 leading-relaxed">
                  {section.description}
                </p>
                <ul className="flex flex-col gap-4">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[18px] font-bold"
                    >
                      <span className="text-primary text-[20px] mt-[2px]">
                        <LuArrowRight className="w-6 h-6" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
