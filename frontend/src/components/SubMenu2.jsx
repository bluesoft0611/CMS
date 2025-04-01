import { Link } from 'react-router-dom';

const baseURL = "http://45.76.23.70:1337";

export default function SubMenu2({ content }) {
    return (
      <div>
        <div className="grid grid-cols-3 gap-2">
          {content[0].articles.map((article, i) => (
            <div className="flex flex-row gap-4 mt-5">
                <Link to={article.url}>
                <img src={baseURL +article.image[0].url} alt="" className="mb-2 rounded w-[136px] h-[136px]" />
                </Link>
                <div className="flex flex-col gap-4 w-[247px]">
                <Link to={article.url} className="font-nunito font-medium text-lg leading-[24px] tracking-normal text-primary">
                    {article.title}
                </Link>
                <Link className="font-nunito font-normal text-base leading-[24px] tracking-normal">{article.description}</Link>
                <Link to={article.url} className="text-md text-primary flex items-center gap-2">
                    <p className="font-nunito font-medium text-lg leading-[24px] tracking-normal"> 
                        Read more
                    </p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" fill="#0054A3"/>
                    </svg>
                </Link>
                </div>
            </div>
          ))}
        </div>
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
    );
}