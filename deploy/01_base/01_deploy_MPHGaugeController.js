const config = require("../../configs/config.json");

module.exports = async ({ deployments, getNamedAccounts, getChainId}) => {

  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();  

  const votingEscrow = await deployments.get('veMPH');
  
  const deployResult = await deploy("MPHGaugeController", {
    from: deployer,
    log: true,
    args: [config.mphToken, votingEscrow.address],
    });
  
  if (deployResult.newlyDeployed) {
    log(
      `MPH Gauge Controller deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas on chain --${chainId}`
    );
  }
};
module.exports.tags = ["MPHGaugeController"];
module.exports.dependencies = [];
