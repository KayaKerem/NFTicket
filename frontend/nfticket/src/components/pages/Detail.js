import PriceSvg from "../../assets/svg/price.svg";

export const Detail = (props) => {
  const { ticket } = props;
  return (
    <div className="mt-10">
      <div className="mt-7">
        <div className="flex items-center justify-between mb-7 flex-wrap">
          <h2 className="section-title m-2">Ticket Details</h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img alt="" src={ticket.img}></img>
        </div>
        <div className="flex w-full px-[10%]  pt-7">
          <div className="flex flex-col  flex-1 gap-4">
            <h1 className="text-md sm:text-[24px] font-bold text-[#27262E]">
              {ticket.name}
            </h1>
            <h2 className="text-md sm:text-[24px] font-semiboldbold text-[#27262E]">
              Description
            </h2>
            <h3 className="text-sm sm:text-[16px] font-semibold text-[#27262E]">
              {ticket.description}
            </h3>
          </div>
          <div className="border-2 rounded-xl bg-white min-w-[320px] p-8 flex items-center flex-col">
            <img alt="" src={PriceSvg}></img>
          </div>
        </div>
      </div>
    </div>
  );
};