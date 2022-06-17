require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

let secret = require('./secret.json');

module.exports = {
  networks: {
    matic: {
      url: 'https://speedy-nodes-nyc.moralis.io/e9251bb6176f4c0d110be505/polygon/mainnet',
      accounts: [secret.key],
    },
  },
  etherscan: {
    apiKey: '2BF744X5U4JYU1FZ5PVFCN2CHKHJHSFY6H',
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
};
