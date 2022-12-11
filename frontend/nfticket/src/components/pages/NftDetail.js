export const NftDetail = ({ nft }) => {
  return (
    <div className="mt-10">
      <div className="mt-7">
        <div className="flex items-center justify-between mb-7 flex-wrap">
          <h2 className="section-title m-2">Ticket Details</h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img alt="" src={nft.img}></img>
        </div>
        <div className="flex w-full px-[10%]  pt-7">
          <div className="flex flex-col  flex-1 gap-4">
            <h1 className="text-md sm:text-[24px] font-bold text-[#27262E]">
              {nft.collectionName}
            </h1>
            <h2 className="text-md sm:text-[24px] font-medium text-[#27262E]">
              {nft.type} Ticket
            </h2>
            <h3 className="text-sm sm:text-[16px] font-semibold text-[#27262E]">
              {nft.description}
            </h3>
          </div>
          <div className="flex items-center flex-col gap-4">
            {/* <div className="flex align-items">
              <span>
                <img alt="" src={PriceImg} className="pr-4" />
              </span>
              <span className="text-xl">{nft.price}</span>
              <span className="text-xl">$</span>
            </div> */}
            <button className="special">
              <span>{nft.price}</span>
              <span className="">{" ETH"}</span>
              <div className="liquid"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
