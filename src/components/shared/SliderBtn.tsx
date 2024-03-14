"use client";
import ArrowIcon from "@/utils/arrowIcon";

const SliderBtn = ({ previous, next }: any) => {
  return (
    <div className=" flex gap-[12px] items-center mt-[38px]">
      <button
        className="w-[32px] h-[32px] rounded-full p-[8px] custom-center transform rotate-[-135deg] custom-text-gradient text-blue-300 outline outline-1 outline-blue-400"
        onClick={previous}
      >
        <ArrowIcon width={16} height={16} stroke="#007bff" />
      </button>
      <div className="">
        <span className="text-[18px] text-blue-dark ">01</span>/
        <span className="text-[12px] text-blue-dark ">06</span>
      </div>
      <button
        className="w-[32px] h-[32px] custom-bg-gradient rounded-full p-[8px] custom-center transform rotate-[45deg]"
        onClick={next}
      >
        <ArrowIcon width={16} height={16} />
      </button>
    </div>
  );
};

export default SliderBtn;
