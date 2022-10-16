import { ethers } from "hardhat";

async function main() {
  const RuzikCoin = await ethers.getContractFactory("RuzikCoin");
  const contract = await RuzikCoin.deploy();

  await contract.deployed();

  console.log(`RuzikCoin deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
