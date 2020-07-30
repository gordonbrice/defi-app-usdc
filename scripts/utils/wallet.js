const ethers = require('ethers');
const mnemonic = 'green daughter phone wash stadium cool seat guard space easily ancient robot';
const address = '0xf5577f855fced8185ca79d0E6BC06499137DF0bC';
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;