import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = "http://45.76.23.70:1337";

const Section7 = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=home`,
    `populate[sections][on][section.section7][populate][image][populate]=*`,
    `populate[sections][on][section.section7][populate][cards][populate]=icon`,
  ].join("&");

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data[0];
        console.log(data);
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  return (
    <div className="py-12 lg:py-28">
      <div className="max-layout-container flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:mr-16 h-full">
            <h6 className="text-lg text-[#4F565E] uppercase mb-2">
              {page?.title}
            </h6>
            <p class="font-nunito font-medium text-3xl lg:text-[40px] lg:leading-[40px] tracking-normal text-primary">
              {page?.subTitle}
            </p>

            <div className="space-y-8 mt-12">
              {page?.cards?.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b pb-3 last:border-b-0 border-dashed"
                >
                  <img
                    src={`${baseURL}${card?.icon?.url}`}
                    alt="Icon"
                    className="w-8 h-8 mt-1"
                  />
                  <div>
                    <p class="font-nunito font-medium text-[26px] leading-[36px] tracking-[-0.04em]">
                      {card.title}
                    </p>
                    <p class="font-nunito font-normal text-base leading-[26px] tracking-[-0.04em]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-auto">
            <img
              src={`${baseURL}${page?.image?.url}`}
              alt="Business handshake"
              className="w-full lg:w-[560px] lg:h-[618px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
