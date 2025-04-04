import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ROUND_VECTOR from "../../../../assets/vector/round-vector.svg";
import MAP_VECTOR from "../../../../assets/vector/map-vector.svg";

const Section9 = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=home`,
    `populate[sections][on][section.section9][populate]=*`,
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
    <div
      className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white bg-primary py-12 lg:py-20 lg:max-h-[284px]"
      id="industries-sec-9"
    >
      <img
        src={ROUND_VECTOR}
        alt="round-vector"
        className="absolute top-0 left-0"
      />
      <img
        src={MAP_VECTOR}
        alt="map-vector"
        className="absolute bottom-0 right-0"
      />

      <div className="max-layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-nunito font-medium text-3xl lg:text-[50px] lg:leading-[60px] tracking-normal text-white max-w-[366px]">
              {page?.title}
            </p>
          </div>

          <div className="max-w-[560px]">
            <p className="font-dm font-semibold text-lg leading-[26px] tracking-normal text-[#EFEFEF] mb-4">
              {page?.subTitle}
            </p>
            <p className="font-dm font-normal text-base leading-[26px] tracking-normal text-[#EFEFEF]">
              {page?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
