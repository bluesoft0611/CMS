import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function OurSolutions() {
  return (
    <div className="bg-[#e6e6e666] py-14 md:py-28">
      <div className="max-layout-container bg-surface-600 bg-opacity-40">
        <div className="flex flex-col justify-center items-center">
          <h5
            className="text-center mb-4 text-[#4f565e] font-semibold text-lg"
            style={{ letterSpacing: "0.1em" }}
          >
            OUR SOLUTIONS
          </h5>
          <div className="text-center max-w-3xl font-bold">
            <h3 className="mb-10 text-primary text-3xl">
              A Comprehensive Suite of Core Business Process Capabilities
              Designed for Innovation, Customization, and Results.
            </h3>
          </div>
          <div className="description">
            <p className="mb-5 text-base md:text-xl">
              Our modular approach to business process design and operations
              management means that stability, flexibility, and customization
              are built into every solution. We combine industry-specific
              knowledge with proven process design strategies, and an
              organizational platform that will have your business humming like
              a well oiled machine.
            </p>
            <p className="text-base md:text-xl">
              Our modular approach to business process design and operations
              management means that stability, flexibility, and customization
              are built into every solution. We combine industry-specific
              knowledge with proven process design strategies, and an
              organizational platform that will have your business humming like
              a well oiled machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 mt-6 md:mt-24">
            <div className="flex flex-col">
              <a href="" className="pb-5 md:pb-12 group">
                <div className="flex justify-center text-primary text-[60px]" />
                <h4 className="effect-b text-2xl md:text-[26px] font-bold mb-4">
                  Business Process Management
                </h4>
                <div className="description">
                  <p className="text-base md:text-xl">
                    We use advanced technology and process administration best
                    practices to streamline and optimize your business function.
                    Complete, turnkey solutions, managed by us, that give you
                    the freedom to let go, so you can focus on your core
                    business activities, with the peace of mind of knowing that
                    your organization is in good hands.
                  </p>
                </div>
                <div className="uppercase text-md mt-6 text-primary font-bold flex items-center gap-1">
                  Learn more
                  <span className="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <BsArrowRight />
                  </span>
                </div>
              </a>
              <a href="" className="pb-5 md:pb-12 group">
                <h4 className="effect-b text-2xl md:text-[26px] font-bold mb-4">
                  Customer Relationship Management
                </h4>
                <div className="description">
                  <p className="text-base md:text-xl">
                    Take control of your customer relationships and drive your
                    business forward with every interaction. Bring your
                    customers into the peaceful world of streamlined workflows,
                    full operational transparency, real-time information, and
                    quality engagement on every level. We analyze and design
                    customer experience as a process, mapping the complete
                    customer engagement journey, from beginning to end, and
                    building custom software and support solutions that optimize
                    relationships, with identifiable and measurable metrics.
                  </p>
                </div>
                <div className="uppercase text-md mt-6 text-primary font-bold flex items-center gap-1">
                  Learn more{" "}
                  <span className="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <BsArrowRight />
                  </span>
                </div>
              </a>
              <a href="" className="pb-5 md:pb-12 group">
                <h4 className="effect-b text-2xl md:text-[26px] font-bold mb-4">
                  Clerical and Word Processing Solutions
                </h4>
                <div className="description">
                  <p className="text-base md:text-xl">
                    By leveraging our advanced technology and business knowhow,
                    we are able to improve efficiency, reduce cost, and increase
                    productivity of every key back office function. At the same
                    time, we optimize value to the organization through smart
                    integration with down- and upstream processes, realizing the
                    full value of these core functions to your business
                    performance.
                  </p>
                </div>
                <div className="uppercase text-md mt-6 text-primary font-bold flex items-center gap-1">
                  Learn more{" "}
                  <span className="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <BsArrowRight />
                  </span>
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <a href="" className="pb-5 md:pb-12 group">
                <h4 className="effect-b text-2xl md:text-[26px] font-bold mb-4">
                  Communications
                </h4>
                <div className="description">
                  <p className="text-base md:text-xl">
                    With our unified, integrated communication solutions
                    seamlessly woven into every business process, teams
                    harmonize, projects thrive, and businesses perform better.
                    Step into a world where people, platforms, and processes all
                    work together seamlessly: enterprise-wide collaboration and
                    effective teamwork through advanced communication systems
                    design and management.
                  </p>
                </div>
                <div className="uppercase text-md mt-6 text-primary font-bold flex items-center gap-1">
                  Learn more{" "}
                  <span className="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <BsArrowRight />
                  </span>
                </div>
              </a>
              <a href="" className="pb-5 md:pb-12 group">
                <h4 className="effect-b text-2xl md:text-[26px] font-bold mb-4">
                  Software and Applications
                </h4>
                <div className="description">
                  <p className="text-base md:text-xl">
                    Our fully integrated platform brings all the convenience and
                    security of best-in-class cloud native technology, fully
                    customized to your unique business process requirements.
                    Access your entire business – data, people, processes – with
                    full visibility and control, from anywhere, any time.
                  </p>
                </div>
                <div className="uppercase text-md mt-6 text-primary font-bold flex items-center gap-1">
                  Learn more{" "}
                  <span className="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <BsArrowRight />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
