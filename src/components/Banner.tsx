import Ellipse1 from "@/utils/ellipse1";
import Ellipse2 from "@/utils/ellipse2";
import Image from "next/image";
import React from "react";
import ButtonCompo from "./shared/Button";
import ProfileIcon from "@/utils/profile_icon";
import ShareIcon from "@/utils/shareIcon";

const BannerSection = () => {
  return (
    <section>
      <div className="container section-spacing-mobile lg:section-spacing pt-[40px] lg:pt-[53px] pb-[76px]">
      <div className="flex flex-col md:flex-row justify-between w-full gap-[38px] lg:gap-[20px] items-center">
        <div className="">
          <div className="">
            <p className="custom-banner-title-mobile md:custom-banner-title text-center md:text-left">Turning</p>
            <p className="custom-banner-title-mobile lg:custom-banner-title text-center md:text-left mt-[5.5px] mb-[8.5px]">
              <span className="custom-text-gradient text-mark">
                Imagination
              </span>{" "}
              into
            </p>
            <p className="custom-banner-title-mobile lg:custom-banner-title text-center md:text-left text-blue ">Innovation</p>
          </div>
          <div className="relative">
            <div className="hidden md:block md:absolute w-[4px] h-[65px] left-0 top-1 custom-bg-gradient rounded-[16px]"></div>
            <p className="w-[327px] lg:w-[554px] text-center md:text-left text-[16px] font-normal leading-[25.6px] mt-[16px] md:ml-[16px]">
              Welcome to my digital playground, where creativity knows no
              bounds. I'm a passionate designer and developer on a mission to
              turn innovative ideas into stunning digital realities.
            </p>
          </div>
          <div className="flex gap-[12px] mt-[24px]">
            <ButtonCompo value="Hire me" />
            <button className="outline w-[139px] py-[12px] flex justify-center items-center rounded-[80px] custom-text-gradient capitalize text-[14px] font-semibold leading-[160%] outline-[1px] outline-blue-500">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="relative w-[327px] lg:w-[550px] h-[350px] lg:h-[526px]">
          <div className="absolute w-[295px] lg:w-[308px] h-[318px] lg:h-[481px] rounded-[16px] bg-[#FFF3EB] top-[-15px] lg:top-[-25px] left-[16px] lg:left-[126px] mt-[45px] lg:mt-[45px]"></div>
          <div className="flex absolute justify-center items-center w-full mt-[47px]">
          <Image
              className="hidden lg:block"
              src="/desktop_img/Rectangle 54.png"
              alt=""
              width={358}
              height={433}
            />
            <Image
              className="block lg:hidden"
              src="/mobile_img/Rectangle 55.png"
              alt=""
              width={327}
              height={286}
            />
          </div>
          <div className="absolute top-[5px] right-[-15px] lg:top-[-2px] lg:right-[78px]">
            <Ellipse1 />
          </div>
          <div className="absolute bottom-[-16px] lg:bottom-[14px] left-[0px] lg:left-[119px]">
            <Ellipse2 />
          </div>
          <div className="hidden md:absolute lg:flex py-[15px] px-[16px] items-center gap-[8px] bg-white top-[78px] rounded-[12px] box-shadow">
            <Image
              className="rounded-[47px]"
              src="/desktop_img/Ellipse 26.png"
              alt=""
              width={47}
              height={47}
            />
            <div className="flex flex-col">
              <p className="text-[16px] font-extrabold leading-[150%] text-custom-black">
                Albert Flores
              </p>
              <p className="text-[14px] font-semibold leading-[150%] text-[#64656D]">
                Product Manager
              </p>
            </div>
          </div>
          <div className="absolute flex py-[14px] px-[16.5px] items-center gap-[8px] bg-white top-[6px] lg:top-[37.5%] right-[175px] lg:right-[32px] rounded-[12px] box-shadow w-[165px] lg:w-[138px]">
            <div className="rounded-[210px] h-[32px] w-[32px] bg-[#9965CF1A] p-[8px] flex justify-center items-center">
              <ProfileIcon />
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-extrabold leading-[150%] text-custom-black">
                15,235
              </p>
              <p className="text-[14px] font-semibold leading-[150%] text-[#64656D]">
                Visitors
              </p>
            </div>
            <div className="flex gap-[2px] items-center text-[12px] font-semibold leading-[160%] text-blue-dark">
              <ShareIcon />
              <p className="">25%</p>
            </div>
          </div>
          <div className="absolute flex p-[16px] items-center gap-[8px] bg-white bottom-[-16px] lg:bottom-[0%] right-[0px] lg:right-[20px] rounded-[12px] box-shadow">
            <div className="rounded-[210px] h-[47px] w-[47px] bg-[#9965CF1A] flex justify-center items-center">
              <Image
                className=""
                src="/shared/project_done.png"
                alt=""
                width={39}
                height={39}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] font-semibold leading-[150%] text-[#64656D]">
                Project Done
              </p>
              <p className="text-[16px] font-extrabold leading-[150%] text-custom-black">
                4678
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BannerSection;