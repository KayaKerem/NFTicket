// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./TechTech.sol";


contract Marketplace{
    using Counters for Counters.Counter;

    Counters.Counter private _marketItemIds;

    // enum Category{
    //     Sports,
    //     Concerts,
    //     Theatres,
    //     Metaverse
    // }
    
    struct MarketPlaceItem{
        uint256 marketItemId;
        address nftContractAddress;
        uint256 tokenId;
        address payable creator;
        address payable seller;
        uint256 basePrice;
        uint256 listingPrice;
        // Category category;
        // uint256 date;
    }

    event MarketPlaceItemListed(
        uint256 indexed marketItemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address creator,
        address seller,
        uint256 basePrice,
        uint256 listingPrice
    );
    
    event MarketPlaceItemUnlisted(
        uint256 indexed marketItemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address creator,
        address seller
    );
    mapping(uint256 => MarketPlaceItem) private listedItems;

    uint256 listingFee = 3;
    uint256 creatorFee = 7;


    address payable private owner;

    constructor() {
        owner = payable(msg.sender);
    }
    
    function createMarketPlaceItem(
        address nftContractAddress,
        uint256 tokenId,
        uint256 listingPrice
    ) public payable returns (uint256) {
        require(listingPrice > 0, "Price must be at least 1 wei");
        require(msg.value == listingFee, "Price must be equal to listing price");
        _marketItemIds.increment();
        uint256 marketItemId = _marketItemIds.current();

        // address creator = /*TechTech(nftContractAddress).getTokenCreatorById(tokenId)*/;
        address creator = 0xA02D09d454861A0ccd2e8518886cDcEC37ecDd2c;//Initial test address of me

        listedItems[marketItemId] = MarketPlaceItem(
            marketItemId,
            nftContractAddress,
            tokenId,
            payable(creator),
            payable(msg.sender),
            0.05 ether,
            listingPrice
        );

        IERC721(nftContractAddress).transferFrom(msg.sender, address(this), tokenId);

        emit MarketPlaceItemListed(
            marketItemId,
            nftContractAddress,
            tokenId,
            payable(creator),
            payable(msg.sender),
            0.05 ether,
            listingPrice
        );

        return marketItemId;
    }


    function cancelMarketItem(address nftContractAddress, uint256 marketItemId) public payable{
        uint256 tokenId = listedItems[marketItemId].tokenId;
        require(tokenId > 0, "Market item has to exist");

        require(listedItems[marketItemId].seller == msg.sender, "You are not the seller");

        IERC721(nftContractAddress).transferFrom(address(this), msg.sender, tokenId);

        delete listedItems[marketItemId];

        listedItems[marketItemId].seller = payable(msg.sender);
        
        emit MarketPlaceItemUnlisted(
            marketItemId,
            nftContractAddress,
            tokenId,
            payable(listedItems[marketItemId].creator),
            payable(msg.sender)
        );

    }

    function createMarketSale(address nftContractAddress, uint256 marketItemId) public payable{
        uint256 price = listedItems[marketItemId].listingPrice;
        uint256 tokenId = listedItems[marketItemId].tokenId;
        uint256 marketProfit = (listingFee * price) / 100;
        uint256 creatorProfit = (creatorFee * price) / 100;


        require(msg.value == price, "Please submit the asking price in order to continue");

        listedItems[marketItemId].seller = payable(msg.sender);



        // listedItems[marketItemId].seller.transfer(msg.value);
        listedItems[marketItemId].creator.transfer(creatorProfit);
        payable(address(this)).transfer(marketProfit);
        listedItems[marketItemId].seller.transfer(price - (marketProfit + creatorProfit));
        IERC721(nftContractAddress).transferFrom(address(this), msg.sender, tokenId);

        delete listedItems[marketItemId];
        payable(owner).transfer(listingFee);
    }

}