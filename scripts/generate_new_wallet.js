const { config } = require('dotenv');
const fs = require("fs");
const ethers = require('ethers');

async function main() {

    const newWallet = await ethers.Wallet.createRandom();

    const secret = {
        account: newWallet.address,
        mnemonic: newWallet.mnemonic.phrase
    };

    // Write data in 'Output.txt' .
    await fs.writeFile('./secret.json', JSON.stringify(secret, null, 4), (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })

    //wtf
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.question(`
      Confirm you have sent ETHER and native token to 
      address: ${newWallet.address}
      
      PRESS [ENTER] TO CONTINUE`, _ => {
        console.log(`👍🏽`);
        readline.close();
      });

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

  







