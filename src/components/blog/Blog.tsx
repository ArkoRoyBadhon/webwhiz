"use client";
import ArrowIcon from "@/utils/arrowIcon";
import Image from "next/image";
import { useState } from "react";

const BlogSection = () => {
  const [isActive, setIsActive] = useState("1");
  return (
    <section className="container-mobile lg:container section-spacing-mobile lg:section-spacing pt-[42px] lg:pt-[130px]">
      <div className="flex flex-col-reverse lg:flex-row justify-between relative">
        <div className="">
          <div className="absolute top-[500px] lg:top-[136px] w-[327px] lg:w-[554px] h-[287px] lg:h-[450px] rounded-[16px] bg-[#EDEEFB]"></div>
          <div className="absolute left-[40px] lg:left-[93px] top-[395px] lg:top-[0px]">
            <Image
              className="hidden lg:block"
              src="/desktop_img/Rectangle 75.png"
              alt=""
              height={510}
              width={369}
            />
            <Image
              className="block lg:hidden"
              src="/desktop_img/Rectangle 75.png"
              alt=""
              height={348}
              width={247}
            />
          </div>
          <div className="absolute bottom-[-510px] lg:bottom-[-22px] custom-center gap-[8px] left-[75px] lg:left-[194px]">
            <div
              className={`w-[50px] h-[4px] rounded-[3px] custom-bg-gradient ${
                isActive === "1" ? "" : "opacity-15"
              }`}
            ></div>
            <div
              className={`w-[50px] h-[4px] rounded-[3px] custom-bg-gradient ${
                isActive === "2" ? "" : " opacity-15"
              }`}
            ></div>
            <div
              className={`w-[50px] h-[4px] rounded-[3px] custom-bg-gradient ${
                isActive === "3" ? "" : "opacity-15"
              }`}
            ></div>
          </div>
        </div>
        <div className="relative lg:mt-[220px]">
          <div className="section-name text-center lg:text-left">blog</div>

          <div className="max-w-[516px] text-custom-black text-[24px] lg:text-[40px] font-extrabold leading-[140%] text-center lg:text-left">
            Our{" "}
            <span className="text-blue-400 text-mark">satisfied customers</span>{" "}
            share their stories
          </div>
          {/* <div className="relative mt-[16px]"> */}
          <div className="hidden lg:block absolute w-[4px] h-[78px] left-0 top-[9.75rem] custom-bg-gradient rounded-[16px]"></div>
          <p className="hidden lg:block w-[327px] lg:w-[498px] text-[16px] font-normal leading-[25.6px] lg:ml-[16px] mt-[20px]">
            The team consistently delivered outstanding results surpassing our
            expectations in terms of creativity strategy Graphic design is a
            dynamic and creative field that blends artistry with technology
          </p>
          <p className="block md:hidden w-[327px] lg:w-[498px] text-[16px] font-normal leading-[25.6px] lg:ml-[16px] mt-[20px]">
            The team consistently delivered outstanding results surpassing our
            expectations in terms
          </p>
          {/* </div> */}

          <div className="flex gap-[12px] items-center mt-[38px]">
            <button className="w-[32px] h-[32px] rounded-full p-[8px] custom-center transform rotate-[-135deg] custom-text-gradient text-blue-300 outline outline-1 outline-blue-400">
              <ArrowIcon width={16} height={16} stroke="#007bff" />
            </button>
            <div className="">
              <span className="text-[18px] text-blue-dark ">01</span>/
              <span className="text-[12px] text-blue-dark ">06</span>
            </div>
            <button className="w-[32px] h-[32px] custom-bg-gradient rounded-full p-[8px] custom-center transform rotate-[45deg]">
              <ArrowIcon width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
