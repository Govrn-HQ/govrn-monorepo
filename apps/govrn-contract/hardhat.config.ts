import * as fs from 'fs';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-preprocessor';
import { HardhatUserConfig, task } from 'hardhat/config';

function getRemappings() {
  return fs
    .readFileSync('remappings.txt', 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim().split('='));
}

const config: HardhatUserConfig = {
  networks: {
    rinkeby: {
      chainId: 4,
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      gas: 8e6,
      gasPrice: 10e9,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      chainId: 5,
      url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
      gas: 8e6,
      gasPrice: 10e9,
      accounts: [process.env.PRIVATE_KEY],
    },
    gnosis: {
      chainId: 5,
      url: `https://rpc.gnosischain.com/`,
      gas: 8e6,
      gasPrice: 10e9,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.13',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src', // Use ./src rather than ./contracts as Hardhat expects
    cache: './cache_hardhat', // Use a different cache for Hardhat than Foundry
  },
  // This fully resolves paths for imports in the ./lib directory for Hardhat
  preprocess: {
    eachLine: (hre) => ({
      transform: (line: string) => {
        if (line.match(/^\s*import /i)) {
          getRemappings().forEach(([find, replace]) => {
            if (line.match('"' + find)) {
              line = line.replace('"' + find, '"' + replace);
            }
          });
        }
        return line;
      },
    }),
  },
};

export default config;
