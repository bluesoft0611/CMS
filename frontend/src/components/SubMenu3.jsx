import { Link } from "react-router-dom";
import { Constant } from "./helper/constant";
import { BsArrowRight } from "react-icons/bs";
import CommonButton from "./common/Button";

const { featuredIndustriesItems, servicesSubMenuItems } = Constant;

export default function SubMenu3() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        <div className="bg-primary bg-opacity-5 rounded-sm p-6 flex flex-col gap-6">
          <h4 className="font-dm-sans font-semibold text-lg leading-[24px] tracking-normal capitalize text-primary">
            Featured
          </h4>
          <div className="flex flex-col gap-4">
            {featuredIndustriesItems.map((item, i) => (
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
                {i !== featuredIndustriesItems?.length - 1 && <hr />}
              </>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-between">
          <div>
            <h4 className="text-primary font-semibold mt-4 text-lg">
              Lorem Ipsum
            </h4>
            <div className="grid grid-cols-2 gap-4" style={{ rowGap: 30 }}>
              {servicesSubMenuItems.slice(0, 4).map((article, i) => (
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
          </div>
          <div className="col-span-4 text-right mr-4">
            <CommonButton label="View All" url={"/view-all"} />
          </div>
        </div>
      </div>
    </div>
  );
}
