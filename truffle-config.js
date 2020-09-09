const GAS = 10000000

// Replace it for Autonity network
const PrivateKeyProvider = require("truffle-privatekey-provider");
const PRIVATE_KEY = "f03a0047b9a1f89b64d1ac264e9e69a3b809a4d43bf1c8c821cb102dd71c0e67"
const AUTONITY_RPC = "http://127.0.0.1:8545"
//const GAS_PRICE = 10000000000000
//const NETWORK_ID = 444800

module.exports = {
  networks: {
    development: {
      provider: () =>  new PrivateKeyProvider(PRIVATE_KEY, AUTONITY_RPC),
      network_id: "*"
    },
//    // Replace it for Autonity network
//    development: {
//      provider: () =>  new PrivateKeyProvider(PRIVATE_KEY, AUTONITY_RPC),
//      gas: GAS,
//      gasPrice: GAS_PRICE,
//      network_id: NETWORK_ID
//    },
  },
  compilers: {
    solc: {
      version: "0.5.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
