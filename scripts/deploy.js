const hre = require('hardhat');
const { ethers } = require('hardhat');

async function main() {
  const contract = await ethers.getContractFactory('PantherQuant');
  const pantherQuant = await contract.deploy();
  console.log('Nft contract deployed to: ', pantherQuant.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
