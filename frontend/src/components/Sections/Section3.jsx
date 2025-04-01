import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const baseURL = "http://45.76.23.70:1337";

const Card = ({ title, text, icon }) => (
  <div className="flex flex-col gap-4 bg-white p-4 border border-gray-200">
    <div className="flex flex-row items-center gap-4">
      <img src={`${baseURL}${icon?.url}`} alt="Icon" className="w-10 h-10" />
      <p class="font-nunito font-normal text-[20px] leading-[30px] tracking-normal text-primary">
        {title}
      </p>
    </div>
    <p class="font-nunito font-normal text-[14px] leading-[24px] tracking-normal text-[#0D0D0D]">
      {text}
    </p>
  </div>
);

const Section3 = () => {

  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=${slug}`,
    `populate[sections][on][section.section3][populate][image][populate]=*`,
    `populate[sections][on][section.section3][populate][cards][populate]=icon`
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
    <div className="max-w-6xl mx-auto px-4 py-12 h-[850px] flex flex-col justify-center items-center">
      <p class="font-nunito font-normal text-[18px] leading-[24px] tracking-normal text-center uppercase text-[#4F565E]">
        {page?.title}
      </p>
      <p class="font-nunito font-medium text-[30px] leading-[40px] tracking-normal text-center mt-4 text-primary max-w-[754px] mx-auto">
        {page?.subTitle}
      </p>
      <p class="font-dm font-normal text-[20px] leading-[30px] tracking-normal align-bottom mt-4">
        {page?.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col gap-6">
          {page?.cards?.slice(0, 3).map((item) => (
            <Card key={item.id} title={item.title} text={item.description} icon={item.icon} />
          ))}
        </div>
        <div>
          <img
            src={`${baseURL}${page?.image?.url}`}
            alt="Center Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          {page?.cards?.slice(3, 6).map((item) => (
            <Card key={item.id} title={item.title} text={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;