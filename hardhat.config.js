require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-vyper");
require("hardhat-deploy");

let secret;

try {
  secret = require("./secret.json");
} catch {
  secret = {
    account: "",
    mnemonic: ""
  };
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
			{
				version: "0.8.0",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.6.11",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.7.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.10",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			}
		],
  },
  namedAccounts: {
    deployer: {
      default: 1,
    },

  },
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/<YOUR ALCHEMY KEY>",
      chainId: 1,
      from: secret.account,
      accounts: {
        mnemonic: secret.mnemonic
      }
    },
    rinkeby: {
      url:
        "https://eth-rinkeby.alchemyapi.io/v2/<YOUR ALCHEMY KEY>",
      chainId: 4,
      from: secret.account,
      accounts: {
        mnemonic: secret.mnemonic
      }
    },
    polygon: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      from: secret.account,
      accounts: {
        mnemonic: secret.mnemonic
      },
      gasPrice: 3.5e9
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      from: secret.account,
      accounts: {
        mnemonic: secret.mnemonic
      }
    },
    fantom: {
      url: "https://rpc.ftm.tools",
      chainId: 250,
      from: secret.account,
      accounts: {
        mnemonic: secret.mnemonic
      }
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  vyper: {
    version: "0.2.12"
  }
};
