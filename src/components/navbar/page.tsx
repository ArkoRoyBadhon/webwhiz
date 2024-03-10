"use client";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/utils/mocks/mocks";
import BrandLogoIcon from "@/utils/bandLogo";
import ButtonCompo from "../shared/Button";

const Navbar = () => {
  return (
    <nav className="container pt-[32px]">
      <div className="flex justify-between items-center">
        <div className="">
          <BrandLogoIcon />
        </div>

        <ul className="flex gap-[32px] text-[14px] font-normal leading-[160%] capitalize items-center">
          {navlinks &&
            navlinks.map((item) => {
              return (
                <li key={item?.name} className="">
                  <Link href={item?.link} className="">
                    {item?.name}
                  </Link>
                </li>
              );
            })}

            <ButtonCompo value="contact" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
