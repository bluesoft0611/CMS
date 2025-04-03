import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PLACEHOLDER_IMG from "../../../assets/images/placeholder2.jpg";

const Tags = ({ tags }) => (
  <div className="tags flex justify-center">
    {tags.map((item, id) => (
      <span
        className="text-[#4f565e] border border-primary hover:bg-[#4d87bf33] hover:border-transparent px-2 py-1 m-1 text-sm font-semibold"
        key={id}
      >
        {item}
      </span>
    ))}
  </div>
);

export default function FromOurBlog() {
  return (
    <div className="py-14 md:py-24">
      <div className="container max-layout-container">
        <h5
          className="text-center mb-4 text-[#4f565e] font-semibold text-lg"
          style={{ letterSpacing: "0.1em" }}
        >
          <a href="/blog">FROM OUR BLOG</a>
        </h5>
        <div className="text-center font-bold">
          <h3 className="mb-10 text-primary text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            alias molestiae.
          </h3>
        </div>
        <div>
          <p className="text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
            qui expedita neque, odio id modi maxime illo quis eius esse ratione
            ipsum beatae, aspernatur minus dolorem! Sit, explicabo rerum! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ratione nostrum
            eos perferendis possimus dolorum nihil delectus corporis optio
            reprehenderit animi a doloribus modi, maiores, deleniti nobis
            deserunt dolor explicabo illum!
          </p>
        </div>

        <div className="overflow-auto md:overflow-visible mt-8 md:mt-24 gap-2 flex justify-between">
          <a
            href="/blog/article"
            className="post group hover:shadow-xl transition duration-300 ease-in-out cursor-pointer w-full md:w-[32%] max-w-md"
          >
            <div className="img-wrapper overflow-hidden">
              <img
                src={PLACEHOLDER_IMG}
                alt=""
                className="transition duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="my-4">
              <Tags tags={["Press", "Marketing", "Blog"]} />
            </div>
            <div className="px-4 text-center">
              <h5 className="group-hover:text-primary text-xl pb-5 px-4 font-semibold truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h5>
              <div className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                sit voluptates unde consequatur tempore inventore minima a...
              </div>
              <button className="font-semibold text-primary uppercase flex m-auto py-6 group-hover:underline">
                read more
              </button>
            </div>
          </a>
          <a
            href="/blog/article"
            className="group hover:shadow-xl transition duration-300 ease-in-out cursor-pointer w-full md:w-[32%] max-w-md"
          >
            <div className="img-wrapper overflow-hidden">
              <img
                src={PLACEHOLDER_IMG}
                alt=""
                className="transition duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="my-4">
              <Tags tags={["Blog"]} />
            </div>
            <div className="px-4 text-center">
              <h5 className="group-hover:text-primary text-xl pb-5 px-4 font-semibold truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h5>
              <div className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                sit voluptates unde consequatur tempore inventore minima a...
              </div>
              <button className="font-semibold text-primary uppercase flex m-auto py-6 group-hover:underline">
                read more
              </button>
            </div>
          </a>
          <a
            href="/blog/article"
            className="group hover:shadow-xl transition duration-300 ease-in-out cursor-pointer w-full md:w-[32%] max-w-md"
          >
            <div className="img-wrapper overflow-hidden">
              <img
                src={PLACEHOLDER_IMG}
                alt=""
                className="transition duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="my-4">
              <Tags tags={["Media", "Business"]} />
            </div>
            <div className="px-4 text-center">
              <h5 className="group-hover:text-primary text-xl pb-5 px-4 font-semibold truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h5>
              <div className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                sit voluptates unde consequatur tempore inventore minima a...
              </div>
              <button className="font-semibold text-primary uppercase flex m-auto py-6 group-hover:underline">
                read more
              </button>
            </div>
          </a>
        </div>
        <div className="text-center mt-6 w-full flex justify-center">
          <a
            href="/blog"
            className="flex items-center gap-1 font-bold text-xl my-8 text-white bg-primary w-fit px-5 py-2 rounded"
          >
            View more
            <span>
              <BsArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
