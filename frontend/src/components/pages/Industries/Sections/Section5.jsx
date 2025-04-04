import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = "http://45.76.23.70:1337";

const Section5 = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=home`,
    `populate[sections][on][section.section5][populate][cards][populate]=icon`,
  ].join("&");

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data[0];
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  return (
    <div className="bg-blue-50 py-16 md:py-28 flex flex-col justify-center">
      <div className="max-layout-container">
        <div className="text-center mb-12">
          <p class="font-nunito font-normal text-[18px] leading-[24px] tracking-normal text-center uppercase text-[#4F565E]">
            {page?.title}
          </p>
          <p class="font-nunito font-medium text-[30px] leading-[40px] tracking-normal text-center max-w-[754px] mx-auto mt-5 text-primary">
            {page?.subTitle}
          </p>
          <p class="font-dm font-normal text-[20px] leading-[30px] tracking-normal text-left mt-5">
            {page?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {page?.cards?.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-sm gap-4 items-start min-h-[344px]"
            >
              <img
                src={`${baseURL}${card?.icon?.url}`}
                alt="Icon"
                className="w-10 h-10 mb-6"
              />
              <div>
                <p class="font-nunito font-medium text-2xl leading-8 tracking-normal mb-4">
                  {card.title}
                </p>
                <p class="font-dm font-normal text-lg leading-[30px] tracking-normal opacity-80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
