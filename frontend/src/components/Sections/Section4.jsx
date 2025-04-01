import React from "react";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const baseURL = "http://45.76.23.70:1337";

const Section4 = () => {

  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=${slug}`,
    `populate[sections][on][section.section4][populate][image][populate]=*`,
    `populate[sections][on][section.section4][populate][cards][populate]=icon`
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
    <div className="bg-[#D9E5F1] py-12 h-[1063px] flex flex-col justify-center">
      <div className="container mx-auto px-4 lg:px-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="flex justify-end">
            <img
              src={`${baseURL}${page?.image?.url}`}
              alt="Business handshake"
              className="w-[560px] h-[539px] h-auto"
            />
          </div>

          <div>
            <p class="font-nunito font-medium text-[30px] leading-[40px] tracking-normal mb-10">
              {page?.cardTitle}
            </p>

            <ul className="space-y-4 mb-6">
              {page?.cards?.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 items-center">
                  <img src={`${baseURL}${item?.icon?.url}`} alt="Icon" className="w-5 h-5" />
                  <span class="font-dm font-normal text-[18px] leading-[24px] tracking-normal text-center align-bottom">{item.title}</span>
                </li>
              ))}
            </ul>

            <Link to={page?.url} className="bg-yellow-400 text-black text-sm px-4 py-2 rounded inline-flex items-center gap-2 mt-6">
              <p class="font-nunito font-semibold text-base leading-[22px] tracking-normal text-center flex items-center justify-center">
                Contact Us
              </p>
              <svg width="13" height="13" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50082 1.75C4.30191 1.75 4.11115 1.67098 3.97049 1.53033C3.82984 1.38968 3.75082 1.19891 3.75082 1C3.75082 0.801088 3.82984 0.610322 3.97049 0.46967C4.11115 0.329018 4.30191 0.25 4.50082 0.25H13.5008C13.6997 0.25 13.8905 0.329018 14.0312 0.46967C14.1718 0.610322 14.2508 0.801088 14.2508 1V10C14.2508 10.1989 14.1718 10.3897 14.0312 10.5303C13.8905 10.671 13.6997 10.75 13.5008 10.75C13.3019 10.75 13.1111 10.671 12.9705 10.5303C12.8298 10.3897 12.7508 10.1989 12.7508 10V2.81L2.03082 13.53C1.88865 13.6625 1.7006 13.7346 1.5063 13.7312C1.312 13.7277 1.12661 13.649 0.989201 13.5116C0.851788 13.3742 0.773076 13.1888 0.769648 12.9945C0.76622 12.8002 0.838343 12.6122 0.970823 12.47L11.6908 1.75H4.50082Z" fill="black"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
