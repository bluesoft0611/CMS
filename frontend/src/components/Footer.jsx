import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo_IMG from "../assets/images/logo.png";

export default function Footer() {
  return (
    <div>
      <footer id="footer" class="flex flex-col-reverse md:flex-col">
        {/* Social */}
        <div class="upper pb-14 md:pb-0 bg-[#d9e5f1]">
          <div class="max-layout-container h-28 md:h-20 text-primary">
            <div class="flex flex-col md:flex-row justify-center md:justify-between gap-2 h-full">
              <ul class="flex justify-center pb-2 gap-4 md:gap-9">
                {[
                  <FaLinkedin className="w-8 h-8" />,
                  <FaFacebook className="w-8 h-8" />,
                  <FaTwitter className="w-8 h-8" />,
                ].map((item, ind) => (
                  <li class="text-2xl flex items-center" key={ind}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-4xl"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div class="flex items-center">
                <span class="text-base lg:text-lg font-semibold">
                  ©2023 Officemotive 2023, all rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* REdirect url's */}
        <div class="pt-10 pb-4 md:pb-16">
          <div class="max-layout-container footer-main flex flex-col md:flex-row gap-4 md:gap-9 justify-between">
            <ul>
              <h5 class="small-title-blue">
                <a href="">Services</a>
              </h5>
              {[
                "Process Design",
                "Implementation",
                "Administration",
                "Systems and Software",
              ].map((item, ind) => (
                <li className="text-[#4f565e] text-lg" key={ind}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              <h5 class="small-title-blue">
                <a href="">Insights</a>
              </h5>
              {["lorem", "lorem", "lorem", "lorem", "lorem"].map(
                (item, ind) => (
                  <li className="text-[#4f565e] text-lg" key={ind}>
                    <a href="">{item}</a>
                  </li>
                )
              )}
            </ul>
            <ul>
              <h5 class="small-title-blue">
                <a href="">Industries</a>
              </h5>
              {[
                "Insurance",
                "Retail",
                "Education",
                "Banking",
                "Curch and Ministry",
              ].map((item, ind) => (
                <li className="text-[#4f565e] text-lg" key={ind}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              <li class="small-title-blue">
                <a href="">About Us</a>
              </li>
              <li class="small-title-blue">
                <a href="">Blog</a>
              </li>
              <li class="small-title-blue">
                <a href="">Solutions</a>
              </li>
              <li class="small-title-blue">
                <a href="">Consulting</a>
              </li>
            </ul>
            <div class="flex flex-col gap-3 py-8">
              <a href="/" class="flex">
                <img
                  src={Logo_IMG}
                  class="md:max-w-[240px] lg:max-w-[320px] object-contain cursor-pointer"
                  alt="Officemotive Logo"
                />
              </a>
              <p className="text-[#4f565e] hover:text-primary text-lg w-full md:max-w-80">
                Adress Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
