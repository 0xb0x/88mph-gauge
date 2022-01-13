#!/bin/bash
if [$1 == 'mainnet']; then
    echo "Cannot deploy MPHCrossChainRewarder to $1"
else 
    node scripts/generate_new_wallet.js

    npx hardhat deploy --tags MPHMiddlemanGuage --network mainnet
    npx hardhat deploy --tags MPHCrossChainRewarder --network $1
fi
