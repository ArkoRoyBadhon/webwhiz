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
import ArrowIcon from "@/utils/arrowIcon";

export interface TypeItem {
  title?: string;
  category?: string;
  img?: string;
}

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all-project");
  const [isActive, setIsActive] = useState("1");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  let data: TypeItem[] = portfolioData?.filter((item) => {
    return item?.category == activeCategory;
  });

  if (data.length <= 0) {
    data = portfolioData;
  }

  // const settings = {
  //   arrows: false,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2.6,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         slidesToShow: 2.6,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const slickRef: any = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <section>
      <div className="w-full pt-[53px] lg:pt-[80px] bg-[#F6F8FD]">
        <div className="container section-spacing-mobile lg:section-spacing">
          <div className="section-name text-center md:text-left">portfolio</div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-[327px] lg:w-[564px] text-custom-black text-[24px] lg:text-[40px] font-extrabold leading-[140%] text-center md:text-left pt-[5px]">
              <h2 className="">
                Discovering digital mastery and {""}
                <span className="text-blue-400 text-mark">
                  Creative innovation
                </span>{" "}
              </h2>
            </div>
            <div className="relative">
              <div className="hidden md:block md:absolute w-[4px] h-[65px] left-[-8px] top-1 custom-bg-gradient rounded-[16px] mt-[-21px]"></div>
              <p className="hidden lg:block w-[489px] text-[16px] font-normal leading-[25.6px] ml-[19px] mt-[-21px]">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously curated gallery that represents the
                epitome of digital excellence and creative ingenuity.
              </p>
              <p className="block lg:hidden w-[327px] lg:w-[489px] text-[14px] lg:text-[16px] font-normal leading-[160%] ml-[16px] lg:mt-[-22px]">
                In our portfolio section, you'll embark on a visual journey
                through a meticulously curated gallery
              </p>
            </div>
          </div>
          <ul className="flex gap-[21px] overflow-y-auto">
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
        </div>
        <div className="mt-[40px] relative h-[254px] lg:h-[490px]">
          <div className="hidden lg:block absolute top-0 left-[-150px] right-[0px] bottom-0 lg:w-[1440px]">
            <div className="flex gap-0">
              {data &&
                data?.map((item: TypeItem, index: number) => {
                  return (
                    <div
                      key={item?.title}
                      className="relative px-[12px] h-full rounded-xl overflow-hidden"
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => handleHover(null)}
                    >
                      <div
                        className={`absolute w-[554px] rounded-xl bg-[#050D1999] ${
                          hoveredIndex === index ? "h-[390px]" : "h-[0px]"
                        } top-[0px] z-30 transition-all ease-in`}
                      >
                        <div className="absolute bottom-0 left-0 w-full p-[16px] flex justify-center">
                          <div className="w-[506px] h-[88px] bg-white p-[16px] flex justify-between rounded-2xl items-center">
                            <div className="">
                              <p className="text-[20px] font-extrabold leading-[150%] text-custom-black">
                                Finance Banking Landing page
                              </p>
                              <p className="text-[14px] font-normal leading-[160%] text-ellipsis text-color-paragraph">
                                In our portfolio section, you'll embark on a
                                visual jo..
                              </p>
                            </div>
                            <div className="w-[48px] h-[48px] custom-bg-gradient rounded-[12px] custom-center p-[12px]">
                              <ArrowIcon width={24} height={24} />
                            </div>
                          </div>
                        </div>
                      </div>
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
            </div>
          </div>
          <div className="block lg:hidden absolute top-0 left-[-150px] right-[0px] bottom-0 lg:w-[1440px]">
            <div className="flex gap-0">
              {data &&
                data?.map((item: TypeItem, index: number) => {
                  return (
                    <div
                      key={item?.title}
                      className="relative px-[12px] h-full rounded-xl overflow-hidden"
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => handleHover(null)}
                    >
                      <div
                        className={`absolute w-[554px] rounded-xl bg-[#050D1999] ${
                          hoveredIndex === index ? "h-[390px]" : "h-[0px]"
                        } top-[0px] z-30 transition-all ease-in`}
                      >
                        <div className="absolute bottom-0 left-0 w-full p-[16px] flex justify-center">
                          <div className="w-[506px] h-[88px] bg-white p-[16px] flex justify-between rounded-2xl items-center">
                            <div className="">
                              <p className="text-[20px] font-extrabold leading-[150%] text-custom-black">
                                Finance Banking Landing page
                              </p>
                              <p className="text-[14px] font-normal leading-[160%] text-ellipsis text-color-paragraph">
                                In our portfolio section, you'll embark on a
                                visual jo..
                              </p>
                            </div>
                            <div className="w-[48px] h-[48px] custom-bg-gradient rounded-[12px] custom-center p-[12px]">
                              <ArrowIcon width={24} height={24} />
                            </div>
                          </div>
                        </div>
                      </div>
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
            </div>
          </div>
          {/* <div className="block lg:hidden absolute top-0 left-[-150px] right-[0px] bottom-0 lg:w-[1440px]">
              <Slider {...settings} ref={slickRef}>
                {data &&
                  data?.map((item: TypeItem, index: number) => {
                    return (
                      <div
                        key={item?.title}
                        className="relative px-[12px] h-full"
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                      >
                        <div
                          className={`absolute w-[327px]  bg-red-400 ${
                            hoveredIndex === index
                              ? "opacity-20 h-[256px]"
                              : "opacity-0 h-[0px]"
                          } top-[0px] z-30 transition-all ease-in duration-300`}
                        ></div>
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
            </div> */}
          <div className=" absolute bottom-[20px] lg:bottom-[45px] right-[188px]">
            <SliderBtn />
            {/* <SliderBtn previous={previous} next={next} /> */}
            <div className="hidden md:flex absolute bottom-[-415px] md:bottom-[-165px]  lg:bottom-[12px] custom-center gap-[8px] left-[75px] lg:left-[-526px] ">
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
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
