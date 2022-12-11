import { Link } from "react-router-dom";
import { RightArrowSvg } from "../svg/RightArrowSvg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Ticket } from "../Ticket";
import OwlCarousel from "react-owl-carousel";
import { NftDetail } from "./NftDetail";
import { NftBox } from "./NftBox";

export const Home = (props) => {
  const { launchs, collections } = props;

  let nfts = [];

  collections.forEach((element) => {
    nfts = nfts.concat(element.nfts);
  });

  const responsive = [
    ("0", { items: 2.2, margin: 10 }),
    ("330", { items: 2.4, margin: 10 }),
    ("400", { items: 2.5, margin: 20 }),
    ("500", { items: 3, margin: 20 }),
    ("600", { items: 3.5, margin: 20 }),
    ("700", { items: 3.5, margin: 30 }),
    ("800", { items: 4, margin: 30 }),
    ("900", { items: 4, margin: 52 }),
    ("1024", { items: 2.4, margin: 20 }),
    ("1100", { items: 2.8, margin: 25 }),
    ("1200", { items: 3, margin: 25 }),
    ("1250", { items: 3.2, margin: 25 }),
    ("1300", { items: 3.4, margin: 30 }),
    ("1440", { items: 4, margin: 30 }),
    ("1500", { items: 4, margin: 40 }),
    ("1600", { items: 4, margin: 52 }),
  ];

  const responsive2 = [
    ("0", { items: 3.2, margin: 10 }),
    ("330", { items: 3.4, margin: 10 }),
    ("400", { items: 3.5, margin: 20 }),
    ("500", { items: 4, margin: 20 }),
    ("600", { items: 4.5, margin: 20 }),
    ("700", { items: 4.5, margin: 30 }),
    ("800", { items: 5, margin: 30 }),
    ("900", { items: 5, margin: 52 }),
    ("1024", { items: 3.4, margin: 20 }),
    ("1100", { items: 2.8, margin: 25 }),
    ("1200", { items: 4, margin: 25 }),
    ("1250", { items: 4.2, margin: 25 }),
    ("1300", { items: 4.2, margin: 30 }),
    ("1440", { items: 5, margin: 30 }),
    ("1500", { items: 5, margin: 40 }),
    ("1600", { items: 5, margin: 52 }),
  ];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1  gap-5">
        <div className="w-full overflow-hidden">
          <div className="mb-3 flex items-center justify-between w-full">
            <h2 className="section-title">Öne Çıkaranlar</h2>
            <nav>
              <Link
                to="/launchpad"
                className="flex space-x-2.5 items-center text-[#7A797D]"
              >
                <span>All Launchpad</span>
                <span>
                  <RightArrowSvg />
                </span>
              </Link>
            </nav>
          </div>
          <OwlCarousel
            loop={true}
            responsive={responsive}
            className="owl-theme"
            nav={true}
          >
            {launchs.map((key) => (
              <Ticket ticket={key} />
            ))}
          </OwlCarousel>
        </div>
      </div>
      <div className="mt-7 grid grid-cols-1  gap-5">
        <div className="w-full overflow-hidden">
          <div className="mb-3 flex items-center justify-between w-full">
            <h2 className="section-title">Collection</h2>
          </div>
          <OwlCarousel
            loop={true}
            responsive={responsive2}
            className="owl-theme"
            nav={true}
          >
            {nfts.map((key) => (
              <NftBox nft={key} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
