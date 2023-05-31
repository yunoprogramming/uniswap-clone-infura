const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    inf_uniswap_goerli: {
      network_id: 5,
      gasPrice: 10000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/yuno/key.env', 'utf-8'), "https://goerli.infura.io/v3/3f0ddad8e3b84556a3549661b4ff245d")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.19"
    }
  }
};
