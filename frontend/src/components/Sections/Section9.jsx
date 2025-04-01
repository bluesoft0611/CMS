import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Section9 = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=${slug}`,
    `populate[sections][on][section.section9][populate]=*`
  ].join('&');

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then(res => res.json())
      .then(json => {
        const data = json.data[0];
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  return (
    <div
      className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white bg-primary"
    >
      <div className="container mx-auto px-4 lg:px-16 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-nunito font-medium text-[50px] leading-[60px] tracking-normal text-white max-w-[366px]">
              {page?.title}
            </p>
          </div>

          <div className="max-w-[560px]">
            <p className="font-dm font-semibold text-lg leading-[26px] tracking-normal text-white mb-4">
              {page?.subTitle}
            </p>
            <p className="font-dm font-normal text-base leading-[26px] tracking-normal text-white">
              {page?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
