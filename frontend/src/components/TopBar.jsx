import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function TopBar() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  const query = [
    `filters[slug][$eq]=${slug}`,
    `populate[sections][on][top-bar.top-bar][populate]=*`,
  ].join("&");

  useEffect(() => {
    fetch(`http://45.76.23.70:1337/api/pages?${query}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data[0];
        console.log(data);
        if (data) setPage(data.sections[0]);
      });
  }, [slug]);

  return (
    <div className="bg-primary text-white text-sm px-36 py-3 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-base">
          <FaPhoneAlt className="text-white" />
          <span>
            Call Us Today!{" "}
            {page?.Social.filter((item) => item.title === "phone")[0]?.url}
          </span>
        </div>
        <div className="flex items-center gap-2 text-base">
          <FaEnvelope className="text-white" />
          <span>
            {page?.Social.filter((item) => item.title === "email")[0]?.url}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={
            page?.Social.filter((item) => item.title === "linkedin")[0]?.url
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-5 h-5"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href={
            page?.Social.filter((item) => item.title === "facebook")[0]?.url
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-5 h-5"
        >
          <FaFacebook className="w-5 h-5" />
        </a>
        <a
          href={page?.Social.filter((item) => item.title === "twitter")[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="w-5 h-5"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href={page?.Social.filter((item) => item.title === "login")[0]?.url}
          className="ml-2 text-base"
        >
          Login
        </a>
      </div>
    </div>
  );
}
