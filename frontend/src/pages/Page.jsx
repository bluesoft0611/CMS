import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionRenderer from "../components/SectionRenderer";

export default function Page() {
  // const { slug } = useParams();
  // const [page, setPage] = useState(null);

  // useEffect(() => {
  //   fetch(`http://45.76.23.70:1337/api/pages?filters[slug][$eq]=${slug}&populate=*`)
  //     .then(res => res.json())
  //     .then(json => {
  //       const data = json.data[0];
  //       console.log(data);
  //       if (data) setPage(data);
  //     });
  // }, [slug]);

  // if (!page) return <div className="p-6">Loading...</div>;

  return (
    <div className="mx-auto">
      {/* {page.sections.map((section, i) => ( */}
      {/* <SectionRenderer key={i} section={section} /> */}
      <SectionRenderer />
      {/* // ))} */}
    </div>
  );
}
