const Uniswap = artifacts.require("Uniswap");

module.exports = function (deployer) {
  deployer.deploy(Uniswap).then((instance) => {
    console.log("Contract deployed at address:", instance.address);
  });
};
