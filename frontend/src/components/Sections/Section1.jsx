import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const baseURL = "http://45.76.23.70:1337";

export default function Section1() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=${"home"}`,
    `populate[sections][on][section.section1][populate]=*`,
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
    <div className="container mx-auto px-4 lg:px-16 py-12 h-[770px] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p class="font-nunito text-[18px] leading-6 tracking-normal uppercase text-[#4F565E]">
            {page?.title}
          </p>
          <p class="font-nunito font-medium text-[30px] leading-10 tracking-normal mt-4 text-primary">
            {page?.subTitle}
          </p>
          <p class="font-nunito text-[16px] font-normal leading-6 tracking-normal align-middle mt-4">
            {page?.description}
          </p>
          <Link
            to={page?.url}
            className="bg-yellow-400 text-black text-sm px-4 py-2 rounded inline-flex items-center gap-2 mt-10"
          >
            <p class="font-nunito font-semibold text-base leading-[22px] tracking-normal text-center flex items-center justify-center">
              Contact Us
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.50082 1.75C4.30191 1.75 4.11115 1.67098 3.97049 1.53033C3.82984 1.38968 3.75082 1.19891 3.75082 1C3.75082 0.801088 3.82984 0.610322 3.97049 0.46967C4.11115 0.329018 4.30191 0.25 4.50082 0.25H13.5008C13.6997 0.25 13.8905 0.329018 14.0312 0.46967C14.1718 0.610322 14.2508 0.801088 14.2508 1V10C14.2508 10.1989 14.1718 10.3897 14.0312 10.5303C13.8905 10.671 13.6997 10.75 13.5008 10.75C13.3019 10.75 13.1111 10.671 12.9705 10.5303C12.8298 10.3897 12.7508 10.1989 12.7508 10V2.81L2.03082 13.53C1.88865 13.6625 1.7006 13.7346 1.5063 13.7312C1.312 13.7277 1.12661 13.649 0.989201 13.5116C0.851788 13.3742 0.773076 13.1888 0.769648 12.9945C0.76622 12.8002 0.838343 12.6122 0.970823 12.47L11.6908 1.75H4.50082Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>

        <div>
          <img
            src={`${baseURL}${page?.image?.url}`}
            alt="Businessman checking time"
            className="w-[560px] h-[539px] h-auto rounded-sm shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
