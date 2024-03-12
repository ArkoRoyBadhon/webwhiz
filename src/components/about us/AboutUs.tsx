"use client";
import { AboutUsData } from "@/utils/mocks/mocks";
import Image from "next/image";
import { useState } from "react";

const AboutSection = () => {
  const [statuses, setStatuses] = useState([
    { label: "Graphic Design", percentage: 65 },
    { label: "Lead Generation", percentage: 87 },
    { label: "Product Design", percentage: 45 },
    { label: "UI/UX design", percentage: 75 },
  ]);
  return (
    <section className="container-mobile lg:container section-spacing-mobile lg:section-spacing pt-[53px] lg:pt-[76px]">
      <div className="section-name text-center md:text-left">about us</div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-[4px]">
        <div className="w-[327px] lg:w-[564px] text-custom-black text-[24px] lg:text-[40px] font-extrabold leading-[140%] text-center md:text-left">
          <p className="">
            We are turning products into{" "}
            <span className="text-blue-400 text-mark">Timeless elegance</span>
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block md:absolute w-[4px] h-[65px] left-0 top-1 custom-bg-gradient rounded-[16px] mt-[-21px]"></div>
          <p className="hidden lg:block w-[489px] text-[16px] font-normal leading-[25.6px] ml-[16px] mt-[-22px]">
            In our portfolio section, you'll embark on a visual journey through
            a meticulously curated gallery that represents the epitome of
            digital excellence and creative ingenuity.
          </p>
          <p className="block lg:hidden w-[327px] lg:w-[489px] text-[14px] lg:text-[16px] font-normal leading-[160%] ml-[16px] lg:mt-[-22px]">
            In our portfolio section, you'll embark on a visual journey through
            a meticulously curated gallery
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-[48px] gap-[32px]">
        <div className="bg-thin-blue rounded-[12px] p-[30px] lg:p-[50px] ">
          <div className="flex flex-col gap-[6px]">
            {statuses.map((status, index) => (
              <div key={index} className="status-bar  h-[50px] ">
                <div className="mb-[5px] text-[16px] font-bold leading-[150%]">
                  {status.label}
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="progress md:w-[260px] lg:w-[412px]">
                    <div
                      className="fill rounded-[10px]"
                      style={{
                        width: `${status.percentage}%`,
                        backgroundColor: "blue",
                      }}
                    ></div>
                  </div>
                  <div className="percentage text-[14px] leading-[160%] ">
                    {status.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src="/desktop_img/image 129.png"
            alt=""
            height={417}
            width={626}
          />
          <div className="absolute custom-bg-gradient flex w-[349px] lg:w-[532px] justify-between items-center rounded-[12px] right-[-12px] md:right-[8px] lg:right-[-51px] bottom-[0px] md:bottom-[25px] lg:bottom-[-24px] py-[16px] lg:py-[31px] lg:px-[31px]">
            {AboutUsData &&
              AboutUsData.map((item, i) => {
                return (
                  <div
                    className={`relative px-[16px] lg:px-0 ${i === 0 && "lg:pl-[0.5px]"}`}
                  >
                    {i > 1 ? (
                      <></>
                    ) : (
                      <div className="absolute w-[2px] h-[60px] rounded-[16px] bg-light-grey top-[-8px] lg:top-[0px] right-[0px] lg:right-[-31px]"></div>
                    )}
                    <p className="text-white text-[16px] screen-lg:text-[24px] font-extrabold leading-[150%] lg:leading-[140%] text-center">
                      {item?.number}+
                    </p>
                    <p className="text-[12px] lg:text-[16px] font-normal leading-[160%] text-light-grey">
                      {item?.title}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
