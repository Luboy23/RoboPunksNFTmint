const hre = require("hardhat");

async function main() { 
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPubksNFT = await RoboPunksNFT.deploy();

  await roboPubksNFT.deployed();
  
  console.log("RoboPunksNFT deployed to:", roboPubksNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
