import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PLACEHOLDER_IMG from "../../../assets/images/placeholder2.jpg";
import CommonCard from "../../common/Card";

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
          {Array.from({ length: 3 }).map((_, ind) => (
            <React.Fragment key={ind}>
              <CommonCard
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                url="/blog/article"
                imgPlaceholder={PLACEHOLDER_IMG}
                tags={
                  ind === 0
                    ? ["Press", "Marketing", "Blog"]
                    : ind === 1
                    ? ["Blog"]
                    : ["Media", "Business"]
                }
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                sit voluptates unde consequatur tempore inventore minima a..."
                btnText="read more"
              />
            </React.Fragment>
          ))}
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
