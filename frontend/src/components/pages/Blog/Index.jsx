import React, { useState } from "react";
import CommonCard from "../../common/Card";
import PLACEHOLDER_IMG from "../../../assets/images/placeholder.jpg";
import PLACEHOLDER_ONE__IMG from "../../../assets/images/placeholder1.jpg";
import PLACEHOLDER_TWO_IMG from "../../../assets/images/placeholder2.jpg";

const myBreadcrumbs = [
  { label: "Home", link: "/", className: "text-[#003f7a] underline" },
  { label: "Blog", link: "/blogs" },
];

const categories = [
  { label: "All", items: 15 },
  { label: "Service", items: 10 },
  { label: "Industry", items: 4 },
];

export default function Blog() {
  const [openCategory, setOpenCategory] = useState(0);

  const toggleCategory = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  const baseButtonClasses = "bg-[#d9e5f1] hover:bg-[#d9e5f1] w-full";

  const blogsItems = [
    {
      tags: ["Press", "Marketing", "Blog"],
      imgPlaceholder: PLACEHOLDER_IMG,
    },
    { tags: ["Blog"], imgPlaceholder: PLACEHOLDER_ONE__IMG },
    { tags: ["Media", "Business"], imgPlaceholder: PLACEHOLDER_TWO_IMG },
    {
      tags: ["Press", "Marketing", "Blog"],
      imgPlaceholder: PLACEHOLDER_IMG,
    },
    { tags: ["Blog"], imgPlaceholder: PLACEHOLDER_ONE__IMG },
    { tags: ["Media", "Business"], imgPlaceholder: PLACEHOLDER_TWO_IMG },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="breadcrumb-section bg-[#d9e5f166] py-4">
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

      {/* Title */}
      <section className="bg-[#003f7a] py-20">
        <h1 class="max-layout-container text-center text-white font-extrabold text-[44px] leading-[60px]">
          Blog
        </h1>
      </section>

      {/* Categories */}
      <section class="mb-16 bg-[#d9e5f166]">
        <div className="w-full md:max-w-[1540px] mx-auto md:px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            {categories.map((category, ind) => (
              <div key={category.label} className="w-full md:w-auto">
                <button
                  className={`py-4 w-full md:w-auto px-8 mx-0 hover:bg-[#d9e5f1] text-primary ${
                    openCategory === ind && baseButtonClasses
                  }`}
                  onClick={() => toggleCategory(ind)}
                >
                  <span
                    className={`pr-2 text-lg font-semibold ${
                      openCategory === ind ? "underline" : ""
                    }`}
                  >
                    {category.label}
                  </span>
                  <span className=" text-lg font-semibold">
                    {category.items}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="pb-24">
        <div className="max-layout-container">
          <div className="flex flex-col md:flex-row columns-3 gap-2 gap-y-16 justify-between flex-wrap my-16">
            {blogsItems.map((blog, ind) => (
              <React.Fragment key={ind}>
                <CommonCard
                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sit voluptates undeconsequatur tempore inventore minima a..."
                  url="/blog/article"
                  imgPlaceholder={blog.imgPlaceholder}
                  tags={blog.tags}
                  btnText="read more"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
