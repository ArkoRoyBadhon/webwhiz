const ButtonCompo = ({ value }: { value: string | null }) => {
  return (
    <button className="custom-bg-gradient w-[160px] px-[24px] py-[12px] flex justify-center items-center rounded-[80px] text-white capitalize text-[14px] font-semibold leading-[160%]">
      {value}
    </button>
  );
};

export default ButtonCompo;
