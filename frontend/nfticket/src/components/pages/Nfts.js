import { NftBox } from "./NftBox";

export const Nfts = ({ ticket }) => {
  return (
    <div className="mt-10">
      <div className="mt-7">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-6">
          {ticket.nfts.map((a) => (
            <NftBox nft={a} isBought={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
