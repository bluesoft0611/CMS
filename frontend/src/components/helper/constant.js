import PLACEHOLDER_IMAGE from "../../assets/images/administration.jpg";
import CAROUSEL_IMG_ONE from "../../assets/images/placeholder2.jpg";
import CAROUSEL_IMG_TWO from "../../assets/images/implementation2.jpg";
import CAROUSEL_IMG_THREE from "../../assets/images/placeholder.jpg";
import CAROUSEL_IMG_FOUR from "../../assets/images/implementation.webp";

export const Constant = {
  // Home sub menu
  sectionsItems: [
    {
      heading: "Life Sciences",
      links: [
        {
          title: "BioTech",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Generics",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Pharmaceutical",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Cell and Gene Therapy",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
      ],
    },
    {
      heading: "Life Sciences",
      links: [
        {
          title: "BioTech",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Generics",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Pharmaceutical",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Cell and Gene Therapy",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
      ],
    },
    {
      heading: "Life Sciences",
      links: [
        {
          title: "BioTech",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Generics",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Pharmaceutical",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
        {
          title: "Cell and Gene Therapy",
          url: "#",
          description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
        },
      ],
    },
  ],

  featuredItems: [
    {
      title: "Lorem ipsum dolor sit amet",
      url: "/",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      url: "/",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      url: "/",
      description: "Lorem ipsum dolor sit amet, sectetur adipiscing",
    },
  ],

  // Services sub menu
  servicesSubMenuItems: [
    {
      image: CAROUSEL_IMG_ONE,
      url: "#",
      title: "Boost Your Productivity Fast",
      description: "Simple tips to get more done quickly.",
    },
    {
      image: PLACEHOLDER_IMAGE,
      url: "#",
      title: "Increase Sales With Strategy",
      description: "Proven methods to boost your business revenue.",
    },
    {
      image: CAROUSEL_IMG_ONE,
      url: "#",
      title: "Master Negotiation Skills",
      description: "Learn to close better business deals fast.",
    },
    {
      image: PLACEHOLDER_IMAGE,
      url: "#",
      title: "Improve Customer Retention",
      description: "Strategies to keep clients coming back.",
    },
    {
      image: CAROUSEL_IMG_ONE,
      url: "#",
      title: "Create A Business Plan",
      description: "Outline your goals and strategies clearly.",
    },
    {
      image: PLACEHOLDER_IMAGE,
      url: "#",
      title: "Maximize Business Profits",
      description: "Cut costs and improve overall performance.",
    },
  ],

  // Industries sub menu
  featuredIndustriesItems: [
    {
      title: "Expand Business Globally",
      url: "/",
      description: "Tips for entering international markets successfully",
    },
    {
      title: "Build A Unique Brand",
      url: "/",
      description: "Make your business stand out easily.",
    },
    {
      title: "Manage Business Risks Well",
      url: "/",
      description: "Identify and mitigate potential business threats.",
    },
    {
      title: "Enhance Marketing Strategy",
      url: "/",
      description: "Reach more customers with better targeting.",
    },
  ],

  homeSlides: [
    {
      title: "Process Design",
      content: `
          <h1 class="font-bold text-[#d9f5f1] pb-7 uppercase text-4xl md:text-5xl">Maximize the potential of your business.</h1>
          <h5 class="text-primary-50 pb-8 text-2xl"> Achieve more, with less, by working smarter. Accelerate growth, improve profitability, and stay ahead. </h5>
          <button class="bg-yellow-400 text-black text-base px-10 py-2 rounded font-semibold">Find out More</button>
        `,
      image: CAROUSEL_IMG_ONE,
    },
    {
      title: "Implementation",
      content: `
          <h1 class="font-bold text-[#d9f5f1] pb-7 uppercase text-4xl md:text-5xl">Integration-ready solutions. </h1>
          <h5 class="text-[#d9f5f1] pb-8 text-2xl"> Execute innovation strategies quickly and easily with our modular Business Engine Platform. </h5>
          <button class="bg-yellow-400 text-black text-base px-10 py-2 rounded font-semibold">Find out More</button>
        `,
      image: CAROUSEL_IMG_TWO,
    },
    {
      title: "Administration",
      content: `
          <h1 class="font-bold text-[#d9f5f1] pb-7 uppercase text-4xl md:text-5xl"> Position your business for success</h1>
          <h5 class="text-[#d9f5f1] pb-8 text-2xl"> Experience breakthrough performance as we direct, control, manage, and supervise your daily operations.</h5>
          <button class="bg-yellow-400 text-black text-base px-10 py-2 rounded font-semibold">Find out More</button>
        `,
      image: CAROUSEL_IMG_THREE,
    },
    {
      title: "Systems and Software",
      content: `
          <h1 class="font-bold text-[#d9f5f1] pb-7 uppercase text-4xl md:text-5xl">Empower your business with next-level tech.</h1>
          <h5 class="text-[#d9f5f1] pb-8 text-2xl">Outperform continuously with future-ready custom technology.</h5>
          <button class="bg-yellow-400 text-black text-base px-10 py-2 rounded font-semibold">Find out More</button>
        `,
      image: CAROUSEL_IMG_FOUR,
    },
  ],
};
