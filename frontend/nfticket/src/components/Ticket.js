import { Link } from "react-router-dom";
import { RightArrowSvg } from "./svg/RightArrowSvg";

export const Ticket = (props) => {
  const { img, name } = props;
  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="relative pt-[30%]">
        <img alt="" src={img} className="absolute left-0 top-0 w-full"></img>
      </div>
      <div className="pt-2.5 px-3 pb-1.5">
        <h1 className="text-center text-primary-orange text-lg ">{name}</h1>
        <Link
          to="/detail"
          name={name}
          className="flex w-full h-[38px] border border-[rgba(149,122,225,0.38)] rounded-xl px-4 py-2.5 items-center justify-between mt-2 group hover:bg-primary-purple transition-all"
        >
          <span className="text-[10px] font-bold group-hover:text-white text-[#27262E] ">
            Bilet Detayları
          </span>
          <span>
            <RightArrowSvg className="group-hover:stroke-white" />
          </span>
        </Link>
      </div>
    </div>
  );
};