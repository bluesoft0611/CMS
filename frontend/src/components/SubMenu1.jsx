import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SubMenu1({ sections }) {
    const ssections = sections[0].sections;
    const ffeatured = sections[0].featured;
    return (
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-2 col-span-1">
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
          <div className="bg-primary p-6 bg-opacity-5 h-[fit-content] rounded-sm">
            <h4 className="font-dm-sans font-semibold text-lg leading-[24px] tracking-normal capitalize text-primary mb-2">
              Featured
            </h4>
            {ffeatured.map((item, i) => (
              <Link
                to={item.url}
                key={i}
                className="block mb-3 text-sm text-gray-700 hover:text-primary flex justify-between border-b pb-3 border-primary-300 last:border-b-0"
              >
                <div>
                  <div className="font-nunito font-semibold text-base leading-[22px] tracking-normal">
                    {item.title}
                  </div>
                  <div className="font-nunito font-normal text-sm leading-[20px] tracking-normal max-w-[282px] mt-2">
                    {item.description}
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                      fill="#0054A3"
                    />
                  </svg>
                </div>
              </Link>
          ))}
          </div>
        </div>
  
        <div className="col-span-3 grid grid-cols-3 gap-10">
          {ssections?.map((section, i) => (
            <div key={i}>
              <h4 className="font-dm-sans font-semibold text-lg leading-[24px] tracking-normal capitalize text-primary mb-8">
                {section.heading}
              </h4>
              {section?.links?.map((link, j) => (
                <div key={j} className="mb-4 hover:text-primary" >
                  <Link
                    to={link.url}
                    className="text-sm font-medium text-gray-900 flex items-center gap-5 hover:text-primary"
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                          fill="#0054A3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          ))}
  
          <div className="col-span-4 text-right mr-4">
            <Link to="/view-all" className="bg-yellow-400 text-black text-sm px-4 py-2 rounded inline-flex items-center gap-2">
            <p class="font-nunito font-semibold text-base leading-[22px] tracking-normal text-center flex items-center justify-center">
              View All
            </p>
              <svg width="13" height="13" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50082 1.75C4.30191 1.75 4.11115 1.67098 3.97049 1.53033C3.82984 1.38968 3.75082 1.19891 3.75082 1C3.75082 0.801088 3.82984 0.610322 3.97049 0.46967C4.11115 0.329018 4.30191 0.25 4.50082 0.25H13.5008C13.6997 0.25 13.8905 0.329018 14.0312 0.46967C14.1718 0.610322 14.2508 0.801088 14.2508 1V10C14.2508 10.1989 14.1718 10.3897 14.0312 10.5303C13.8905 10.671 13.6997 10.75 13.5008 10.75C13.3019 10.75 13.1111 10.671 12.9705 10.5303C12.8298 10.3897 12.7508 10.1989 12.7508 10V2.81L2.03082 13.53C1.88865 13.6625 1.7006 13.7346 1.5063 13.7312C1.312 13.7277 1.12661 13.649 0.989201 13.5116C0.851788 13.3742 0.773076 13.1888 0.769648 12.9945C0.76622 12.8002 0.838343 12.6122 0.970823 12.47L11.6908 1.75H4.50082Z" fill="black"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
}