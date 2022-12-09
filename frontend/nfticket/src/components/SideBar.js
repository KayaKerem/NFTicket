import { Link } from "react-router-dom";
import Logo from "../assets/png/logo.png";
import { CollectionSvg } from "./svg/CollectionSvg";
import { HomeSvg } from "./svg/HomeSvg";
import { LaunchpadSvg } from "./svg/LauncpadSvg";
import { ProfileSvg } from "./svg/ProfileSvg";
import MetaMask from "../assets/png/metamask.png";
import { RightArrowSvg } from "./svg/RightArrowSvg";

export const SideBar = (props) => {
  const { account } = props;
  return (
    <div className="hidden lg:block max-w-[292px] min-w-[292px] w-[292px] fixed left-0 top-0">
      <div className="flex flex-col max-h-screen h-screen bg-white overflow-y-auto px-6 pt-6 pb-8">
        <div className="flex items-center justify-center">
          <a href="#">
            <img alt="" src={Logo} className="max-w-[123px]" />
          </a>
        </div>
        <ul className="mt-12 space-y-12 font-medium">
          <li>
            <nav>
              <Link to="/" className="sidebar-li-link group">
                <span>
                  <HomeSvg />
                </span>
                <span className="group-hover:text-primary-purple">Home</span>
              </Link>
            </nav>
          </li>
          <li>
            <nav>
              <Link to="launchpad" className="sidebar-li-link group">
                <span>
                  <LaunchpadSvg />
                </span>
                <span className="group-hover:text-primary-purple">
                  Launchpad
                </span>
              </Link>
            </nav>
          </li>
          <li>
            <nav>
              <Link to="collection" className="sidebar-li-link group">
                <span>
                  <CollectionSvg />
                </span>
                <span className="group-hover:text-primary-purple">
                  Collection
                </span>
              </Link>
            </nav>
          </li>
        </ul>
        <div className="mt-12">
          {account !== "" ? (
            <ul className="mt-6 space-y-6 font-medium">
              <li>
                <nav>
                  <Link to="profile" className="sidebar-li-link group">
                    <span>
                      <ProfileSvg />
                    </span>
                    <span className="group-hover:text-primary-purple">
                      Profile
                    </span>
                  </Link>
                </nav>
              </li>
            </ul>
          ) : (
            <div
              id="sidebarConnectWallet"
              className="mt-8 rounded-2xl w-full p-4 group bg-a"
            >
              <a className="cursor-pointer flex items-center space-x-2.5 text-sm font-bold text-[#27262E] p-4 rounded-xl bg-white justify-between group-hover:bg-[#A7C7E7] transition-all">
                <span>
                  <img alt="" src={MetaMask} className="max-w-[20px]" />
                </span>
                <span className="group-hover:text-white">Connect Wallet</span>
                <span>
                  <RightArrowSvg className="group-hover:stroke-primary-purple" />
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
