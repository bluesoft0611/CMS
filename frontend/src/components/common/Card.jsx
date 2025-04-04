import React from "react";

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

export default function CommonCard({
  title,
  url,
  imgPlaceholder,
  tags,
  description,
  btnText,
}) {
  return (
    <a
      href={url}
      className="post group hover:shadow-xl transition duration-300 ease-in-out cursor-pointer w-full md:w-[32%]"
    >
      <div className="img-wrapper overflow-hidden">
        <img
          src={imgPlaceholder}
          alt=""
          className="transition duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="my-4">
        <Tags tags={tags} />
      </div>
      <div className="px-4 text-center">
        <h5 className="group-hover:text-primary text-xl pb-5 px-4 font-semibold truncate">
          {title}
        </h5>
        <div className="text-xl">{description}</div>
        <button className="font-semibold text-primary uppercase flex m-auto py-6 group-hover:underline">
          {btnText}
        </button>
      </div>
    </a>
  );
}
