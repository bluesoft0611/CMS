import React from "react";
import HeroSec from "./HeroSec";
import HelperSec, { OurPartners } from "../../helper/HelperSec";
import Section2 from "./Section2";
import Section4 from "./Section4";
import ClientTestimonial from "./ClientTestimonial";
import ExpertAndApproach from "./ExperAndAppro";
import Section7 from "./Section7";
import "./services.css";

const myBreadcrumbs = [
  { label: "Home", link: "/", className: "text-[#003f7a] underline" },
  { label: "Services", link: "/services" },
];

export default function Services() {
  return (
    <div>
      {/* Breadcrumb Box */}
      <section className="breadcrumb-section bg-[#d9e5f1] py-4">
        <div className="max-layout-container">
          <ol className="flex items-center space-x-4 w-full hide-scrollbar overflow-x-auto">
            {myBreadcrumbs.map((item, ind) => (
              <>
                <li
                  className="justify-center items-center space-x-2 flex"
                  key={ind}
                >
                  <a className={item?.className} href={item.link}>
                    {item.label}
                  </a>
                </li>
                {ind < myBreadcrumbs.length - 1 && (
                  <li className="flex text-[#4f565e] text-[13px]" aria-hidden>
                    &#129122;
                  </li>
                )}
              </>
            ))}
          </ol>
        </div>
      </section>

      {/* Breadcrumb Box */}
      <HeroSec />

      {/* Section2 */}
      <Section2 />

      {/* ClientTestimonial sec */}
      <ClientTestimonial />

      {/* Helper Box */}
      <HelperSec />

      {/* Section4 */}
      <Section4 />

      {/* Our Partners Sec */}
      <OurPartners />

      {/* Our Expertise and Approach Sec */}
      <ExpertAndApproach />

      {/* Section7 */}
      <Section7 />
    </div>
  );
}
