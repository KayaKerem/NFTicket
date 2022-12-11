import { NftBox } from "./NftBox";
import Metamask from "../../assets/png/metamask.png";

export const Profile = ({ tickets, account }) => {
  return (
    <div className="mt-10">
      <div className="mt-7">
        <div className="flex items-center justify-between mb-7 flex-wrap">
          <h2 className="section-title m-2">My Tickets</h2>
          <button className="rounded-full h-[48px] xs:h-[52px] bg-white shadow-md space-x-1.5 min-w-[143px] max-w-[172px] w-full flex items-center xs:py-2.5 xs:px-4 px-2 py-1 text-xs xs:text-sm md:text-base group hover:bg-[#A7C7E7] transition-all">
            <span>
              <img alt="" src={Metamask} className="max-w-[20px]" />
            </span>
            <span className="text-[#957AE1] font-medium group-hover:text-white flex-1 text-center text-ellipsis overflow-hidden">
              {account}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-6">
          {tickets.map((a) => (
            <NftBox nft={a} isBought={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
