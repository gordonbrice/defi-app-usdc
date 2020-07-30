const ethers = require('ethers');
const wallet = require('./utils/wallet');
const provider = require('./utils/provider');

async main() {
    wallet.connect(provider);
}

main();