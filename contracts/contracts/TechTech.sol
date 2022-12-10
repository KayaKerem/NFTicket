// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TechTech is ERC721, ERC721URIStorage, Ownable {
   

    uint256 public MINT_PRICE = 0.05 ether;
    uint256 public MAX_SUPPLY = 1000;
    address public ownerOfCollection = 0xD5900cE1bA1839023E3Fd101E7F3c92E43916764;
    // uint256 public MINT_PROFIT = 5;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("TechTech", "TCH") {
        _tokenIdCounter.increment();
    }


    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://TechTechh/";
    }

    function safeMint(address to)public payable{
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId <= MAX_SUPPLY,"All NFTs have been minted");
        require(msg.value >= MINT_PRICE,"Not enough ether sent");
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    
    function withdraw() public onlyOwner{
        require(address(this).balance > 0,"Balance is zero");
        payable(ownerOfCollection).transfer(address(this).balance);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}