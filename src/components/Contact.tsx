import ClockIcon from "@/utils/contactUsIcon/clockIcon";
import EmailIcon from "@/utils/contactUsIcon/emailIcon";
import OrgIcon from "@/utils/contactUsIcon/orgemailIcon";
import PhoneIcon from "@/utils/contactUsIcon/phoneNumberIcon";
import Image from "next/image";

const Contactsection = () => {
  return (
    <section>
      <div className="container section-spacing-mobile lg:section-spacing pt-[42px] lg:pt-[100px] min-h-[515px]">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-[8px] lg:gap-[80px] relative">
        <div className="flex flex-col w-[356px] h-[282px]">
          <h5 className="text-[24px] lg:text-[40px] text-left font-extrabold leading-[140%] text-custom-black">
            Contact Us
          </h5>
          <div className="relative mt-[12px] ">
            <div className="hidden lg:block lg:absolute w-[4px] h-[52px] left-0 top-0 custom-bg-gradient rounded-[16px]"></div>
            <p className="w-[327px] lg:w-[440px] text-[16px] font-normal leading-[25.6px] lg:ml-[16px]">
              Feel free to reach out to us at any time. We value your feedback,
              inquiries, and collaboration.
            </p>
          </div>
          <div className="mt-[19px] lg:mt-[40px]">
            <form action="">
              <div className="flex flex-col gap-[16px] lg:gap-[24px]">
                <div className="w-[327px] lg:w-[456px] px-[24px] py-[16px] flex items-center border-bottom">
                  <input
                    className="w-full outline-none focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-[327px] lg:w-[456px] px-[24px] py-[16px] flex items-center border-bottom">
                  <input
                    className="w-full outline-none focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="w-[327px] lg:w-[456px] px-[24px] py-[16px] flex items-center border-bottom">
                  <input
                    className="w-full outline-none focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Message"
                  />
                </div>
              </div>

              <button className="custom-bg-gradient w-[327px] lg:w-[456px] h-[56px] px-[24px] py-[12px] custom-center rounded-[80px] capitalize text-[14px] font-semibold leading-[160%] text-white mt-[24px]">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mb-[400px] lg:mb-0 bg-red-200 lg:mt-[-13.5px]">
          <div className="absolute w-[55px] lg:w-[117px] h-[55px] lg:h-[117px] rounded-[8px] bg-light-grey top-[-15px] lg:top-[-26px] left-[-15px] md:left-[400px] lg:left-[58%]"></div>
          <div className="absolute top-[13px] right-[0px]  lg:right-[-149px]">
            <Image
              className="hidden lg:block"
              src="/desktop_img/Rectangle 63.png"
              alt=""
              height={475}
              width={590}
            />
            <Image
              className="block lg:hidden"
              src="/desktop_img/Rectangle 63.png"
              alt=""
              height={263.263}
              width={327}
            />
          </div>

          <div className="absolute w-[261px] lg:w-[471px] h-[216px] lg:h-[288px] rounded-[16px] bg-light-grey top-[165px] md:top-[200px] lg:top-[31%] left-[30px] md:left-[460px] lg:left-[47%] flex flex-col gap-[24px] lg:gap-[32px] p-[24px] lg:p-[32px]">
            <div className="flex items-center text-[14px] lg:text-[16px] font-normal leading-[160%] gap-[8px]">
              <span className="block lg:hidden">
                <EmailIcon width={24} height={24} />
              </span>
              <span className="hidden lg:block">
                <EmailIcon />
              </span>
              <p className="">michael.mitc@example.com</p>
            </div>
            <div className="flex items-center text-[14px] lg:text-[16px] font-normal leading-[160%] gap-[8px]">
              <span className="block lg:hidden">
                <PhoneIcon width={24} height={24} />
              </span>
              <span className="hidden lg:block">
                <PhoneIcon />
              </span>
              <p className="">michael.mitc@example.com</p>
            </div>
            <div className="flex items-center text-[14px] lg:text-[16px] font-normal leading-[160%] gap-[8px]">
              <span className="block lg:hidden">
                <OrgIcon width={24} height={24} />
              </span>
              <span className="hidden lg:block">
                <OrgIcon />
              </span>
              <p className="">michael.mitc@example.com</p>
            </div>
            <div className="flex items-center text-[14px] lg:text-[16px] font-normal leading-[160%] gap-[8px]">
              <span className="block lg:hidden">
                <ClockIcon width={24} height={24} />
              </span>
              <span className="hidden lg:block">
                <ClockIcon />
              </span>
              <p className="">michael.mitc@example.com</p>
            </div>

            {/* {contactData &&
              contactData.map((item) => {
                return (
                  <div
                    key={item?.title}
                    className="flex items-center text-[14px] lg:text-[16px] font-normal leading-[160%] gap-[8px]"
                  >
                    <span>{item?.icon}</span>
                    <p className="">{item?.title}</p>
                  </div>
                );
              })} */}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contactsection;
