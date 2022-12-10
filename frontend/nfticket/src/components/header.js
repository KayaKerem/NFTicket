import { SearchSvg } from "./svg/Search";
import MetaMask from "../assets/png/metamask.png";
import openMobileMenu from "../assets/svg/openMobileMenu.svg";

export const Header = (props) => {
  const { account, connect } = props;
  return (
    <div className="flex justify-between items-center w-full flex-wrap sm:flex-nowrap">
      <div className="mr-5 lg:hidden">
        <span className="cursor-pointer">
          <img alt="" src={openMobileMenu} />
        </span>
      </div>
      <div className="relative flex-1 min-w-full sm:min-w-0 mt-5 sm:mt-0 order-last sm:order-none">
        <input
          type="text"
          className="w-full h-16 rounded-full outline-none pl-10 lg:pl-20  text-[#B9B8BC] placeholder:text-[#B9B8BC] pr-2"
          placeholder="Search Collections and more..."
        />
        <SearchSvg />
      </div>
      <div className="space-x-2 lg:space-x-7 ml-2 lg:ml-28 flex items-center">
        {account === "" ? (
          <button
            onClick={connect}
            className="rounded-full h-[48px] xs:h-[52px] bg-white shadow-md space-x-1.5 min-w-[143px] w-full flex items-center xs:py-2.5 xs:px-4 px-2 py-1 text-xs xs:text-sm md:text-base group hover:bg-[#A7C7E7] transition-all"
          >
            <span>
              <img alt="" src={MetaMask} className="max-w-[20px]" />
            </span>
            <span className="text-[#957AE1] group-hover:text-white font-medium  flex-1 text-center">
              Connect Wallet
            </span>
          </button>
        ) : (
          <button className="rounded-full h-[48px] xs:h-[52px] bg-white shadow-md space-x-1.5 min-w-[143px] max-w-[172px] w-full flex items-center xs:py-2.5 xs:px-4 px-2 py-1 text-xs xs:text-sm md:text-base group hover:bg-[#A7C7E7] transition-all">
            <span>
              <img alt="" src={MetaMask} className="max-w-[20px]" />
            </span>
            <span className="text-[#957AE1] font-medium group-hover:text-white flex-1 text-center text-ellipsis overflow-hidden">
              {account}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
