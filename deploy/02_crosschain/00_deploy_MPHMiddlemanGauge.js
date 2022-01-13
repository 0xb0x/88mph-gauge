const config = require("../../configs/config.json");
const middlemanGaugeConfig = require("../../configs/middleman_gauge_config.json");

module.exports = async ({ deployments, getNamedAccounts, getChainId}) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();  
  const gaugeConfig = middlemanGaugeConfig.chainId;

  const rewardsDistributor =  await deployments.get('MPHGaugeRewardsDistributor');
  
  const deployResult = await deploy("MPHMiddlemanGuage", {
    from: deployer,
    log: true,
    args: [
        gaugeConfig.owner, 
        config.timelock, 
        rewardsDistributor.address, 
        gaugeConfig.bridgeAddress, 
        gaugeConfig.bridgeType , 
        gaugeConfig.destinationAddress,
        gaugeConfig.nonEVMDestination, 
        gaugeConfig.name
    ],
  });

  if (deployResult.newlyDeployed) {
    log(
      `MPH Middleman Gauge deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas on chain --${chainId}`
    );
  }
  
};

module.exports.tags = ["MPHMiddlemanGuage"];
module.exports.dependencies = [];
