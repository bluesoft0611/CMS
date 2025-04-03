import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommonButton from "./common/Button";
import { Constant } from "./helper/constant";
import { BsArrowRight } from "react-icons/bs";

const { featuredItems, sectionsItems } = Constant;

export default function SubMenu1() {
  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="flex flex-col gap-[10px] col-span-1">
        <div className="h-[fit-content] relative w-full">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch className="w-4 h-4" />
          </div>
        </div>
        <div className="bg-primary p-5 bg-opacity-5 h-full rounded-[4px] flex flex-col gap-4">
          <h4 className="font-dm-sans font-semibold text-lg leading-[24px] tracking-normal capitalize text-primary">
            Featured
          </h4>
          <div className="flex flex-col gap-4">
            {featuredItems.map((item, i) => (
              <>
                <Link
                  to={item.url}
                  key={i}
                  className="text-sm text-gray-700 hover:text-primary flex justify-between"
                >
                  <div className="flex flex-col gap-2">
                    <div className="font-nunito font-semibold text-base leading-[22px] tracking-normal">
                      {item.title}
                    </div>
                    <div className="font-nunito font-normal text-sm leading-[20px] tracking-normal max-w-[282px]">
                      {item.description}
                    </div>
                  </div>
                  <div>
                    <BsArrowRight className="w-6 h-6" />
                  </div>
                </Link>
                {i !== featuredItems?.length - 1 && <hr />}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-10">
          {sectionsItems?.map((section, i) => (
            <div className="flex flex-col gap-6" key={i}>
              <h4 className="font-dm-sans font-semibold text-lg leading-[24px] tracking-normal capitalize text-primary">
                {section.heading}
              </h4>
              {section?.links?.map((link, j) => (
                <div key={j} className="hover:text-primary">
                  <Link
                    to={link.url}
                    className="text-sm font-medium text-gray-900 flex gap-4 hover:text-primary"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="font-nunito font-semibold text-base leading-[22px] tracking-normal">
                        {link.title}
                      </div>
                      <div className="font-nunito font-normal text-sm leading-[20px] max-w-[282px] tracking-normal">
                        {link.description}
                      </div>
                    </div>
                    <span>
                      <BsArrowRight className="w-6 h-6" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="col-span-4 text-right mr-4 mt-7">
          <CommonButton label="View All" url={"/view-all"} />
        </div>
      </div>
    </div>
  );
}
