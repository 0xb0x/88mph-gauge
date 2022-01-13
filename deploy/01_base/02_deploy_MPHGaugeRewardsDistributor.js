const config = require("../../configs/config.json");

module.exports = async ({ deployments, getNamedAccounts, getChainId}) => {
  const { deploy, log } = deployments;
  const { deployer, owner } = await getNamedAccounts();

  const chainId = await getChainId();  

  const mphGaugeController =  await deployments.get('MPHGaugeController');
  
  const deployResult = await deploy("MPHGaugeRewardsDistributor", {
    from: deployer,
    log: true,
    args: [config.owner, config.timelock, config.curator, config.mphToken, mphGaugeController.address ],
    });

  if (deployResult.newlyDeployed) {
    log(
      `MPHGaugeRewardsDistributor deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas on chain --${chainId}`
    );
  }
  
};

module.exports.tags = ["MPHGaugeRewardsDistributor"];
module.exports.dependencies = [];
