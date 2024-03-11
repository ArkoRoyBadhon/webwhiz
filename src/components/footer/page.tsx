import Copyicon from "@/utils/footerIcon/Copyicon";
import LogoIcon from "@/utils/footerIcon/logoIcon";
import { footerData } from "@/utils/mocks/mocks";
import BehanceIcon from "@/utils/socialIcons/behanceIcon";
import DribbleIcon from "@/utils/socialIcons/dribbleIcon";
import LinkedinIcon from "@/utils/socialIcons/linkedinIcon";
import TelegramIcon from "@/utils/socialIcons/telegramIcon";
import TwitterIcon from "@/utils/socialIcons/twitterIcon";
import StarIcon from "@/utils/startIcon";

type ILinks = {
  title: string;
  icon?: any;
  link: string;
};

type ITypeFooter = {
  mainTitle: string;
  links: ILinks;
};

const FooterSection = () => {
  return (
    <footer className="w-full bg-custom-dark min-h-[453px] mt-[140px]">
      <div className="container section-spacing bg-transparent">
        <div className="flex justify-between pt-[32px]">
          <div className="">
            <div className="section-name">Join Us</div>
            <div className="flex items-center gap-[10px] ">
              <div className="text-white text-[32px] font-extrabold leading-[140%]">
                Subscribe for newsletter
              </div>
              <div className="border-[3.111px] border-solid border-orange p-[5.78px] rounded-full mt-1">
                <StarIcon />
              </div>
            </div>
          </div>
          <div className="flex justify-between border border-gray-400 w-[370px] h-[46px] rounded-[80px] gap-[10px] mt-[10px]">
            <input
              className="focus:outline-none bg-transparent px-[16px]"
              placeholder="Enter your Email"
              type="text"
            />
            <button className=" w-[111px] px-[16px] py-[10px] custom-center rounded-[80px] text-white custom-bg-gradient capitalize text-[14px] font-semibold leading-[160%] outline-[1px]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-[62px] flex gap-[133px]">
          <div className="">
            <div className="flex text-white gap-[8px]">
              <LogoIcon />
              <p className="font-extrabold text-[18px] leading-[150%]">
                WebWhiz
              </p>
            </div>
            <p className="mt-[8px] w-[339px] text-[16px] font-normal leading-[160%] text-footer-gray">
              Customer Feedback Analytic like it was Supposed to be!
            </p>
            <div className="relative mt-[16px]">
              <p className="text-white text-[16px] leading-[160%] font-normal">
                Social Links
              </p>
              <div className="absolute bg-blue-dark w-[2px] h-[27px]  left-[108px] transform top-0 rotate-[-90deg]"></div>
              <div className="flex gap-[8px] mt-[16px]">
                <TwitterIcon />
                <LinkedinIcon />
                <TelegramIcon />
                <BehanceIcon />
                <DribbleIcon />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[44px]">
            {footerData &&
              footerData.map((item, i) => {
                return (
                  <div key={i} className="relative">
                    <div className="absolute bg-blue-dark w-[2px] h-[37px]  left-[17px] bottom-[153px] transform rotate-[-90deg]"></div>
                    <h5
                      className={`text-white mb-[28px] text-[20px] font-bold leading-[150%] ${
                        i === 2 && "ml-[10px]"
                      }`}
                    >
                      {item?.mainTitle}
                    </h5>
                    {item?.links.map((subLink: ILinks) => {
                      return (
                        <div key={subLink?.title} className="mb-[14px]">
                          <div className=" flex ">
                            {subLink?.icon && (
                              <div className="ml-[8px] mr-[08px]">
                                {subLink?.icon}
                              </div>
                            )}
                            <p className="text-footer-gray">{subLink?.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>

        <hr className="w-[1140] bg-[#0E1025] mt-[26px] opacity-20" />
        <div className="custom-center gap-[2px] py-[16px]">
          <Copyicon />
          <p className="text-[14px] leading-[160%] font-normal text-footer-gray">
            Copyright 2023 Elearner,Inc NewYork
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
