const hre = require("hardhat");

async function main() {
    //Get the contract deploy
    const TechTech = await hre.ethers.getContractFactory("TechTech");
    const techTech = await TechTech.deploy();
    await techTech.deployed();
    console.log("TechTech deployed to ",techTech.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
