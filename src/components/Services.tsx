import { serviceData } from "@/utils/mocks/mocks";

const ServiceSection = () => {
  return (
    <section className="container section-spacing-mobile lg:section-spacing pt-[50px] lg:pt-[184px]">
      <div className="section-name text-center md:text-left">
        services
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-[327px] lg:w-[516px] text-custom-black text-[24px] lg:text-[40px] font-extrabold leading-[140%] text-center md:text-left">
          Our{" "}
          <span className="text-blue-400 text-mark">satisfied customers</span>{" "}
          share their stories
        </div>
        <div className="relative">
          <div className="hidden md:block md:absolute w-[4px] h-[65px] left-0 top-1 custom-bg-gradient rounded-[16px] mt-[-28px]"></div>
          <p className="hidden lg:block w-[498px] text-[16px] font-normal leading-[25.6px] ml-[16px] mt-[-28px]">
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
      <div className="grid md:grid-cols-2 grid-cols-1 mt-[40px] gap-[24px] lg:gap-[32px]">
        {serviceData &&
          serviceData.map((item) => {
            return (
              <div key={item?.title} className="p-[32px] box-shadow">
                <div className="flex justify-between items-start">
                  <div className="w-[54px] lg:w-[80px] h-[54px] lg:h-[80px] bg-blue-300 rounded-[16px] custom-center p-[12px]">
                    {item?.categoryIcon}
                  </div>
                  <div className="w-[48px] h-[48px] custom-bg-gradient rounded-[42px] custom-center p-[12px]">
                    {item?.arrowIcon}
                  </div>
                </div>
                <div className="mt-[16px]">
                  <h4 className="text-[28px] font-extrabold leading-[140%] text-custom-black">
                    {item?.title}
                  </h4>
                  <p className="text-[16px] font-normal leading-[160%] text-custom-black mt-[8px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ServiceSection;
