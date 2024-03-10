import { contactData } from "@/utils/mocks/mocks";
import Image from "next/image";

const Contactsection = () => {
  return (
    <section className="container section-spacing pt-[76px] ">
      <div className="flex justify-between gap-[80px] relative">
        <div className="flex flex-col w-[356px] h-[282px]">
          <h5 className="text-[40px] font-extrabold leading-[140%] text-custom-black">
            Contact Us
          </h5>
          <div className="relative mt-[12px] ">
            <div className="absolute w-[4px] h-[52px] left-0 top-0 custom-bg-gradient rounded-[16px]"></div>
            <p className="w-[440px] text-[16px] font-normal leading-[25.6px] ml-[16px] ">
              Feel free to reach out to us at any time. We value your feedback,
              inquiries, and collaboration.
            </p>
          </div>
          <div className="mt-[40px]">
            <form action="">
              <div className="flex flex-col gap-[24px]">
                <div className="w-[456px] px-[24px] py-[16px] flex items-center border-bottom">
                  <input
                    className="w-full outline-none focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-[456px] px-[24px] py-[16px] flex items-center border-bottom">
                  <input
                    className="w-full outline-none focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="w-[456px] px-[24px] py-[16px] flex items-center border-bottom">
                  <input
                    className="w-full outline-none focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Message"
                  />
                </div>
              </div>

              <button className="custom-bg-gradient w-[456px] h-[56px] px-[24px] py-[12px] custom-center rounded-[80px] capitalize text-[14px] font-semibold leading-[160%] text-white mt-[24px]">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" bg-red-200 mt-[-13.5px]">
          <div className="absolute top-[13px] right-[-149px]">
            <Image
              src="/desktop_img/Rectangle 63.png"
              alt=""
              height={475}
              width={590}
            />
          </div>
          <div className="absolute w-[117px] h-[117px] rounded-[8px] bg-light-grey top-[-26px] left-[58%]"></div>
          <div className="absolute w-[471px] h-[288px] rounded-[16px] bg-light-grey top-[31%] left-[47%] flex flex-col gap-[32px] p-[32px]">
            {contactData &&
              contactData.map((item) => {
                return (
                  <div
                    key={item?.title}
                    className="flex items-center text-[16px] font-normal leading-[160%] gap-[8px]"
                  >
                    <span>{item?.icon}</span>
                    <p className="">{item?.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
