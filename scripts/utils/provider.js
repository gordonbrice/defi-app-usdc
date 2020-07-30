const ethers = require('ethers');
const provider = ethers.getDefaultProvider('ropsten', {
    infura: 'https://ropsten.infura.io/v3/015df1be12b048868f4207cab21cb8f9'
});

module.exports = provider;
