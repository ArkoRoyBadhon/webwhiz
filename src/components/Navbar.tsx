"use client";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/utils/mocks/mocks";
import BrandLogoIcon from "@/utils/bandLogo";
import ButtonCompo from "./shared/Button";
import MenuIcon from "@/utils/mobileresponsive/menuIcon";

const Navbar = () => {
  return (
    <header className="container section-spacing-mobile md:section-spacing-tab lg:section-spacing pt-[32px]">
      <div className="flex justify-between items-center">
        <div className="">
          <BrandLogoIcon />
        </div>

        <nav className="flex items-center md:flex-row-reverse lg:flex-row md:gap-[8px] lg:gap-[34px]">
          <div className="block lg:hidden">
            <MenuIcon />
          </div>
          <ul className="hidden lg:flex gap-[32px] text-[14px] font-normal leading-[160%] capitalize items-center">
            {navlinks &&
              navlinks.map((item) => {
                return (
                  <li key={item?.name} className="ml-[0px]">
                    <Link href={item?.link} className="">
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <button className="hidden md:block custom-center custom-bg-gradient px-[24px] py-[12px] rounded-[80px] text-white text-[14px]">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
