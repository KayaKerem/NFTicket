import { Link } from "react-router-dom";
import { RightArrowSvg } from "./svg/RightArrowSvg";
import ClockSvg from "../assets/svg/clock.svg";
import { useDispatch } from "react-redux";
import { setCollection } from "../store/collection";

export const ShowCollection = ({ ticket, isConnected }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="relative pt-[30%]">
        <img
          alt=""
          src={ticket.img}
          className="absolute left-0 top-0 w-full"
        ></img>
      </div>
      <div className="pt-2.5 px-3 pb-1.5">
        <h1 className="text-center text-lg font-bold    ">{ticket.name}</h1>
        <h2 className="text-center text-lg font-medium">
          {ticket.type} Ticket
        </h2>
        <div className="flex justify-center bottom-2.5 w- py-1.5 pl-1.5 pr-2.5 flex items-center space-x-2 rounded-full  bg-[rgba(22,22,22,0.16)]">
          <span>
            <img src={ClockSvg} alt="" />
          </span>
          <span className="text-xs text-white font-bold">{ticket.date}</span>
        </div>
        <h2 className="text-center text-lg font-medium">
          Floor Price: {ticket.floorPrice} ETH
        </h2>
        {isConnected ? (
          <Link
            to="/nfts"
            onClick={() => dispatch(setCollection(ticket))}
            className="flex w-full h-[38px] border border-[rgba(149,122,225,0.38)] rounded-xl px-4 py-2.5 items-center justify-between mt-2 group hover:bg-primary-purple transition-all"
          >
            <span className="text-[10px] font-bold group-hover:text-white text-[#27262E] ">
              Show
            </span>
            <span>
              <RightArrowSvg className="group-hover:stroke-white" />
            </span>
          </Link>
        ) : (
          <button
            disabled
            className="cursor-not-allowed flex w-full h-[38px] border border-[rgba(149,122,225,0.38)] rounded-xl px-4 py-2.5 items-center justify-between mt-2 group hover:bg-primary-purple transition-all"
          >
            <span className="text-[10px] font-bold group-hover:text-white text-[#27262E] ">
              Show
            </span>
            <span>
              <RightArrowSvg className="group-hover:stroke-white" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
