const hre = require('hardhat');

async function main() {
  const GovrnV1 = await hre.ethers.getContractFactory('Govrn');
  const govrn = await hre.upgrades.deployProxy(GovrnV1, [1000], {
    kind: 'uups',
  });
  await govrn.deployed();

  console.log(
    'Govrn deployed to:',
    govrn.address,
    govrn.deployTransaction.chainId
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
