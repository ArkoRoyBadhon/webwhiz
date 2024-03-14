"use client";
import {
  AboutUsData,
  portfolioCategory,
  portfolioData,
} from "@/utils/mocks/mocks";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SliderBtn from "./shared/SliderBtn";

export interface TypeItem {
  title?: string;
  category?: string;
  img?: string;
}

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all-project");

  let data: TypeItem[] = portfolioData?.filter((item) => {
    return item?.category == activeCategory;
  });

  if (data.length <= 0) {
    data = portfolioData;
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slickRef: any = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <section className="container section-spacing-mobile lg:section-spacing pt-[53px] lg:pt-[80px] bg-[#F6F8FD]">
      <div className="section-name text-center md:text-left">portfolio</div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-[327px] lg:w-[564px] text-custom-black text-[24px] lg:text-[40px] font-extrabold leading-[140%] text-center md:text-left pt-[5px]">
          <p className="">
            Discovering digital mastery and {""}
            <span className="text-blue-400 text-mark">
              Creative innovation
            </span>{" "}
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block md:absolute w-[4px] h-[65px] left-[-8px] top-1 custom-bg-gradient rounded-[16px] mt-[-21px]"></div>
          <p className="hidden lg:block w-[489px] text-[16px] font-normal leading-[25.6px] ml-[19px] mt-[-21px]">
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
      <div className="">
        <ul className="flex overflow-y-auto">
          {portfolioCategory &&
            portfolioCategory.map((item) => {
              return (
                <li
                  key={item?.title}
                  className="relative pt-[27px] pb-[8px] px-[12px]"
                >
                  <button
                    onClick={() => setActiveCategory(item?.category)}
                    className="text-blue-light text-[16px] w-[120px] md:w-fit leading-[150%] font-semibold"
                  >
                    {item?.title}
                  </button>
                  <div
                    className={`${
                      activeCategory === item?.category
                        ? "absolute w-full h-[2px] bg-blue-light bottom-0 left-0"
                        : "hidden"
                    }`}
                  ></div>
                </li>
              );
            })}
        </ul>
        <div className="mt-[40px] relative h-[320px] lg:h-[490px]">
          <div className="hidden lg:block absolute top-0 left-[-150px] right-[0px] bottom-0 lg:w-[1440px]">
            <Slider {...settings} ref={slickRef}>
              {data &&
                data?.map((item: TypeItem) => {
                  return (
                    <div key={item?.title} className="px-[12px] h-full">
                      <Image
                        className="hidden lg:block"
                        src={item?.img!}
                        alt=""
                        height={390}
                        width={554}
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="block lg:hidden absolute top-0 left-[-150px] right-[0px] bottom-0 lg:w-[1440px]">
            <Slider {...settings} ref={slickRef}>
              {data &&
                data?.map((item: TypeItem) => {
                  return (
                    <div key={item?.title} className="px-[12px] h-full">
                      <Image
                        className="block lg:hidden"
                        src={item?.img!}
                        alt=""
                        height={256}
                        width={327}
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className=" absolute bottom-[20px] lg:bottom-[48px] right-[-2px]">
            <SliderBtn previous={previous} next={next} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
