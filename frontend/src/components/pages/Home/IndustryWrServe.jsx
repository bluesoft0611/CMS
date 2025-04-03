import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function IndustryWrServe() {
  return (
    <div className="bg-[#d9e5f1] xs:py-14 py-24">
      <div className="max-layout-container bg-surface-600 bg-opacity-40">
        <div className="flex flex-col justify-center items-center">
          <h5
            className="text-center mb-4 text-[#4f565e] font-semibold text-lg"
            style={{ letterSpacing: "0.1em" }}
          >
            INDUSTRIES WE SERVE
          </h5>
          <div className="text-center max-w-3xl font-bold">
            <h3 className="mb-10 text-primary text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h3>
          </div>
          <div className="description">
            <p className="mb-5 text-base md:text-[22px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quasi, rerum velit enim temporibus vero odio placeat!
              Eos rerum placeat quibusdam perferendis quo impedit assumenda? Quo
              necessitatibus voluptas ducimus incidunt? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aliquid id quos impedit,
              explicabo labore sunt, veritatis eius nam aut animi blanditiis
              temporibus nulla culpa, voluptatum asperiores adipisci praesentium
              modi voluptate?
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-1 md:gap-24 mt-6 md:mt-24 w-full justify-between">
            <div className="col-4 flex flex-col">
              {[
                "Banking",
                "Church and Ministry",
                "Communications & Media",
                "Education",
                "Transportation & Logistics",
              ].map((item, id) => (
                <a href="" className="py-2" key={id}>
                  <div className="text-xl text-[#4f565e] font-bold flex items-center gap-4">
                    <BsArrowRight className="text-primary" />
                    {item}
                  </div>
                </a>
              ))}
            </div>

            <div className="col-4 flex flex-col">
              {[
                "Government",
                "Healthcare",
                "Insurance",
                "Legal and Law Enforcement",
                "Travel & Hospitality",
              ].map((item, id) => (
                <a href="" className="py-2" key={id}>
                  <div className="text-xl text-[#4f565e] font-bold flex items-center gap-4">
                    <BsArrowRight className="text-primary" />
                    {item}
                  </div>
                </a>
              ))}
            </div>

            <div className="col-4 flex flex-col">
              {["Life Sciences", "Manufacturing", "Non-profit", "Retail"].map(
                (item, id) => (
                  <a href="" className="py-2" key={id}>
                    <div className="text-xl text-[#4f565e] font-bold flex items-center gap-4">
                      <BsArrowRight className="text-primary" />
                      {item}
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
