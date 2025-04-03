import { Link } from "react-router-dom";
import CommonButton from "./common/Button";
import { Constant } from "./helper/constant";
import { BsArrowRight } from "react-icons/bs";

const { servicesSubMenuItems } = Constant;

export default function SubMenu2() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2" style={{ rowGap: 40 }}>
        {servicesSubMenuItems.map((article, i) => (
          <div className="flex flex-row gap-4 mt-5" key={i}>
            <Link to={article.url}>
              <img
                src={article.image}
                alt=""
                className="rounded w-[136px] h-full"
              />
            </Link>
            <div className="flex flex-col gap-4 w-[247px]">
              <div className="flex flex-col gap-3">
                <h2 className="font-nunito font-medium text-lg leading-[24px] tracking-normal text-primary">
                  {article.title}
                </h2>
                <p className="font-nunito font-normal text-base leading-[24px] tracking-normal">
                  {article.description}
                </p>
              </div>
              <Link
                to={article.url}
                className="text-md text-primary flex items-center gap-2"
              >
                <p className="font-nunito font-medium text-lg leading-[24px] tracking-normal">
                  Read more
                </p>
                <BsArrowRight className="w-6 h-6 mt-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-4 text-right mt-10">
        <CommonButton label="View All" url={"/view-all"} />
      </div>
    </div>
  );
}
