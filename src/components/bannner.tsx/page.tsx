import Ellipse1 from "@/utils/ellipse1";
import Ellipse2 from "@/utils/ellipse2";
import Image from "next/image";
import React from "react";
import ButtonCompo from "../shared/Button";
import ProfileIcon from "@/utils/profile_icon";
import ShareIcon from "@/utils/shareIcon";

const BannerSection = () => {
  return (
    <section className="container pt-[100px]">
      <div className="flex justify-between w-full gap-[20px]">
        <div className="">
          <div className="">
            <p className="custom-banner-title">Turning</p>
            <p className="custom-banner-title">
              <span className="custom-text-gradient">Imagination</span> into
            </p>
            <div className="">
              <p className="custom-banner-title text-blue">Innovation</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-[4px] h-[65px] left-0 top-1 custom-bg-gradient rounded-[16px]"></div>
            <p className="w-[554px] text-[16px] font-normal leading-[25.6px] mt-[16px] ml-[12px]">
              Welcome to my digital playground, where creativity knows no
              bounds. I'm a passionate designer and developer on a mission to
              turn innovative ideas into stunning digital realities.
            </p>
          </div>
          <div className="flex gap-[12px] mt-[24px]">
            <ButtonCompo value="Hire me" />
            <ButtonCompo value="view portfolio" />
          </div>
        </div>
        <div className="relative w-[550px] h-[526px]">
          <div className="absolute w-[308px] h-[481px] rounded-[16px] bg-light-orange opacity-30 top-[-25px] left-[120px]"></div>
          <div className="flex absolute justify-center items-center w-full">
            <Image
              className=""
              src="/desktop_img/Rectangle 54.png"
              alt=""
              width={358}
              height={433}
            />
          </div>
          <div className="absolute top-[-40px] right-[70px]">
            <Ellipse1 />
          </div>
          <div className="absolute bottom-[60px] left-[120px]">
            <Ellipse2 />
          </div>
          <div className="absolute flex p-[16px] items-center gap-[8px] bg-white top-5 rounded-[12px] box-shadow">
            <Image
              className="rounded-[47px]"
              src="/desktop_img/Rectangle 54.png"
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
          <div className="absolute flex p-[16px] items-center gap-[8px] bg-white top-[30%] right-0 rounded-[12px] box-shadow">
            <div className="rounded-[210px] h-[24px] w-[24px] bg-[#9965CF1A] flex justify-center items-center">
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
          <div className="absolute flex p-[16px] items-center gap-[8px] bg-white bottom-[10%] right-2 rounded-[12px] box-shadow">
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
    </section>
  );
};

export default BannerSection;
