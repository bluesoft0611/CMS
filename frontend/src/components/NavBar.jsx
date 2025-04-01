import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import SubMenu1 from './SubMenu1';
import SubMenu2 from './SubMenu2';
import SubMenu3 from './SubMenu3';

const baseURL = "http://45.76.23.70:1337";

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=${slug}`,
    `populate[sections][on][navigation.menu][populate][logo][populate]=*`,
    `populate[sections][on][navigation.menu][populate][menuItems][populate][subMenu1][populate][sections][populate]=*`,
    `populate[sections][on][navigation.menu][populate][menuItems][populate][subMenu1][populate][featured][populate]=*`,
    `populate[sections][on][navigation.menu][populate][menuItems][populate][subMenu2][populate][articles][populate]=*`,
    `populate[sections][on][navigation.menu][populate][menuItems][populate][subMenu3][populate][featured][populate]=*`,
    `populate[sections][on][navigation.menu][populate][menuItems][populate][subMenu3][populate][articles][populate]=*`,
  ].join('&');

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then(res => res.json())
      .then(json => {
        const data = json.data[0];
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  return (
    <div className="border-b relative z-40">
      <div className="flex justify-between items-center px-36 py-4 bg-white">
        <img src={baseURL + page?.logo.url} alt="logo" className="w-64" />
        <nav className="flex gap-6 text-sm font-medium text-gray-700 relative">
          {page?.menuItems.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                setActiveIndex(idx);
              }}
              className="relative"
            >
              <Link to={item.url} className="hover:text-primary">
                {item.label}
              </Link>
            </div>
          ))}
          <button aria-label="Search"><FiSearch /></button>
        </nav>
      </div>

      {activeIndex !== null && page?.menuItems[activeIndex]?.subMenuType && (
        <div
          onMouseLeave={() => {
            setActiveIndex(null);
          }}
          className="absolute left-0 top-full w-full z-50"
        >
          <SubNav
            type={page.menuItems[activeIndex].subMenuType}
            content={page.menuItems[activeIndex]}
          />
        </div>
      )}
    </div>
  );
}

function SubNav({ type, content }) {
  return (
    <div className="absolute left-0 top-full bg-white shadow-xl border-t border-gray-200 p-6 z-50 w-screen border-t-2 border-primary">
      {type === 'subMenu1' && <SubMenu1 sections={content.subMenu1} />}
      {type === 'subMenu2' && <SubMenu2 content={content.subMenu2} />}
      {type === 'subMenu3' && <SubMenu3 content={content.subMenu3} />}
    </div>
  );
}