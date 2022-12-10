export const NftDetail = ({ nft, collection }) => {
  console.log(collection.name);
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
              {collection.name}
            </h1>
            <h3 className="text-sm sm:text-[16px] font-semibold text-[#27262E]">
              {collection.description}
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
              <span className="">Mint</span>
              <div className="liquid"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
