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
    <section className="container section-spacing pt-[76px]">
      <div className="section-name">about us</div>
      <div className="flex items-center justify-between mb-[4px]">
        <div className="w-[564px] text-custom-black text-[40px] font-extrabold leading-[140%]">
          <p className="">
            We are turning products into{" "}
            <span className="text-blue-400 text-mark">Timeless elegance</span>
          </p>
        </div>
        <div className="relative">
          <div className="absolute w-[4px] h-[65px] left-0 top-1 custom-bg-gradient rounded-[16px] mt-[-21px]"></div>
          <p className="w-[489px] text-[16px] font-normal leading-[25.6px] ml-[16px] mt-[-22px]">
            In our portfolio section, you'll embark on a visual journey through
            a meticulously curated gallery that represents the epitome of
            digital excellence and creative ingenuity.
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-[48px] gap-[32px]">
        <div className="bg-thin-blue rounded-[12px] p-[50px] ">
          <div className="flex flex-col gap-[6px]">
            {statuses.map((status, index) => (
              <div key={index} className="status-bar w-[454px] h-[50px] ">
                <div className="mb-[5px] text-[16px] font-bold leading-[150%]">
                  {status.label}
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="progress w-[412px]">
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
          <div className="absolute custom-bg-gradient flex w-[532px] justify-between items-center rounded-[12px] right-[-51px] bottom-[-24px] p-[31px]">
            {AboutUsData &&
              AboutUsData.map((item, i) => {
                return (
                  <div className={`relative ${i === 0 && "pl-[0.5px]"}`}>
                    {i > 1 ? (
                      <></>
                    ) : (
                      <div className="absolute w-[2px] h-[60px] rounded-[16px] bg-light-grey right-[-31px]"></div>
                    )}
                    <p className="text-white text-[24px] font-extrabold leading-[140%] text-center">
                      {item?.number}+
                    </p>
                    <p className="text-[16px] font-normal leading-[160%] text-light-grey">
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
