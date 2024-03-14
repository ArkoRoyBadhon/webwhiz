import ArrowIcon from "@/utils/arrowIcon";
import StarIcon from "@/utils/startIcon";
import Image from "next/image";

const ClientReview = () => {
  return (
    <section className="container section-spacing-mobile lg:section-spacing pt-[60px] lg:pt-[165px]">
      <div className="flex flex-col lg:flex-row justify-between gap-[32px] relative">
        <div className="flex flex-col lg:w-[356px] lg:h-[282px]">
          <h5 className="text-[24px] lg:text-[40px] text-left font-extrabold leading-[140%] text-custom-black">
            Client Reviews
          </h5>
          <div className="relative flex mt-[5px] lg:mt-[12px] ">
            <div className="hidden md:block lg:absolute w-[4px] h-[52px] left-0 top-0 custom-bg-gradient rounded-[16px]"></div>
            <p className="w-[314px] lg:w-[314px] text-[16px] font-normal leading-[25.6px] md:ml-[16px]">
              The team at consistently delivered outstanding surpassing
              expectations
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row gap-[32px] min-h-[400px]">
            <div className="">
              <Image
                src="/desktop_img/Rectangle 62.png"
                alt=""
                width={306}
                height={401}
              />
            </div>
            <div className="mt-auto">
              <div className="hidden lg:flex gap-[12px] items-center justify-end mb-[16px]">
                <button className="w-[32px] h-[32px] rounded-full p-[8px] custom-center transform rotate-[-135deg] custom-text-gradient text-blue-300 outline outline-1 outline-blue-400">
                  <ArrowIcon width={16} height={16} stroke="#007bff" />
                </button>
                <div className="">
                  <span className="text-[18px] text-blue-dark ">01</span>/
                  <span className="text-[12px] text-blue-dark ">06</span>
                </div>
                <button className="w-[32px] h-[32px] custom-bg-gradient rounded-full p-[8px] custom-center transform rotate-[45deg]">
                  <ArrowIcon width={16} height={16} />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-fit w-fit rounded-md bg-gradient-to-r from-blue-light to-blue-dark p-[1px]">
                  <div className="p-[24px] bg-white rounded-md lg:w-[456px] lg:h-[170px]">
                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-[20px] font-bold leading-[150%]">
                          Maria Sarapavoo
                        </h6>
                        <p className="text-[14px] font-normal leading-[160%]">
                          Whistleblower and privacy advocate
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="">4.5</p> <span><StarIcon /></span>
                      </div>
                    </div>
                    <p className="mt-[16px] text-[16px] leading-[160%] font-normal">
                      The team at WebWhiz consistently delivered outstanding
                      results surpassing our expectations in{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden gap-[12px] items-center justify-center mt-[16px]">
                <button className="w-[32px] h-[32px] rounded-full p-[8px] custom-center transform rotate-[-135deg] custom-text-gradient text-blue-300 outline outline-1 outline-blue-400">
                  <ArrowIcon width={16} height={16} stroke="#007bff" />
                </button>
                <div className="">
                  <span className="text-[18px] text-blue-dark ">01</span>/
                  <span className="text-[12px] text-blue-dark ">06</span>
                </div>
                <button className="w-[32px] h-[32px] custom-bg-gradient rounded-full p-[8px] custom-center transform rotate-[45deg]">
                  <ArrowIcon width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
