const config = require("../../configs/config.json");

module.exports = async ({ deployments, getNamedAccounts, getChainId}) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  const deployResult = await deploy("veMPH", {
    from: deployer,
    log: true,
    args: [config.mphToken, config.veMPH.name , config.veMPH.symbol, config.veMPH.version],
    });


  if (deployResult.newlyDeployed) {
    log(
      `Voting Escrow deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas on chain ${chainId}`
    );
  }
};

module.exports.tags = ["veMPH"];
module.exports.dependencies = [];