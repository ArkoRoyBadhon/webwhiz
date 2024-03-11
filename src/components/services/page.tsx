import { serviceData } from "@/utils/mocks/mocks";

const ServiceSection = () => {
  return (
    <section className="container section-spacing pt-[76px]">
      <div className="section-name">services</div>
      <div className="flex items-center justify-between">
        <div className="max-w-[516px] text-custom-black text-[40px] font-extrabold leading-[140%]">
          Our <span className="text-blue-400 text-mark">satisfied customers</span> share
          their stories
        </div>
        <div className="relative">
          <div className="absolute w-[4px] h-[65px] left-0 top-1 custom-bg-gradient rounded-[16px] mt-[-28px]"></div>
          <p className="w-[498px] text-[16px] font-normal leading-[25.6px] ml-[16px] mt-[-28px]">
            In our portfolio section, you'll embark on a visual journey through
            a meticulously curated gallery that represents the epitome of
            digital excellence and creative ingenuity.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-1 mt-[40px] gap-[32px]">
        {serviceData &&
          serviceData.map((item) => {
            return (
              <div key={item?.title} className="p-[32px] box-shadow">
                <div className="flex justify-between items-start">
                  <div className="w-[80px] h-[80px] bg-blue-300 rounded-[16px] custom-center p-[12px]">
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
