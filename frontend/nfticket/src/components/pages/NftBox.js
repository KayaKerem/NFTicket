import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setNft } from "../../store/nft";
import { RightArrowSvg } from "../svg/RightArrowSvg";

export const NftBox = ({ nft }) => {
  console.log(nft);
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="relative pt-[30%]">
        <img
          alt=""
          src={nft.img}
          className="absolute left-0 top-0 w-full"
        ></img>
      </div>
      <div className="pt-2.5 px-3 pb-1.5">
        <h1 className="text-center text-primary-orange text-lg font-bold    ">
          {nft.id}.Ticket
        </h1>
        <h2 className="text-center text-primary-orange text-lg font-medium">
          {nft.price} ETH
        </h2>
        <h2 className="text-center text-primary-orange text-lg font-medium">
          Chain Number : {nft.chainNum}
        </h2>
        {/* <div className="flex justify-center bottom-2.5 w- py-1.5 pl-1.5 pr-2.5 flex items-center space-x-2 rounded-full  bg-[rgba(22,22,22,0.16)]">
          <span>
            <img src={ClockSvg} alt="" />
          </span>
          <span className="text-xs text-white font-bold">{nft.date}</span>
        </div> */}
        <Link
          to="/nftDetail"
          onClick={() => dispatch(setNft(nft))}
          className="flex w-full h-[38px] border border-[rgba(149,122,225,0.38)] rounded-xl px-4 py-2.5 items-center justify-between mt-2 group hover:bg-primary-purple transition-all"
        >
          <span className="text-[10px] font-bold group-hover:text-white text-[#27262E] ">
            Buy
          </span>
          <span>
            <RightArrowSvg className="group-hover:stroke-white" />
          </span>
        </Link>
      </div>
    </div>
  );
};
