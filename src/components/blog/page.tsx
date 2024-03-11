"use client";
import ArrowIcon from "@/utils/arrowIcon";
import Image from "next/image";
import { useState } from "react";

const BlogSection = () => {
  const [isActive, setIsActive] = useState("1");
  return (
    <section className="container section-spacing pt-[130px]">
      <div className="flex justify-between relative">
        <div className="">
          <div className="absolute top-[136px] w-[554px] h-[450px] rounded-[16px] bg-[#EDEEFB]"></div>
          <div className="absolute left-[93px] top-[0px]">
            <Image
              src="/desktop_img/Rectangle 75.png"
              alt=""
              height={510}
              width={369}
            />
          </div>
          <div className="absolute bottom-[-22px] custom-center gap-[8px] left-[194px]">
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
        <div className="relative mt-[220px]">
          <div className="section-name">blog</div>

          <div className="max-w-[516px] text-custom-black text-[40px] font-extrabold leading-[140%]">
            Our{" "}
            <span className="text-blue-400 text-mark">satisfied customers</span>{" "}
            share their stories
          </div>
          {/* <div className="relative mt-[16px]"> */}
          <div className="absolute w-[4px] h-[78px] left-0 top-[9.75rem] custom-bg-gradient rounded-[16px]"></div>
          <p className="w-[498px] text-[16px] font-normal leading-[25.6px] ml-[16px] mt-[20px]">
          The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology 
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
