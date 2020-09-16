const GAS = 10000000

// Replace it for Autonity network
// const PrivateKeyProvider = require("truffle-privatekey-provider");
// const KeystoreProvider = require("truffle-keystore-provider")
// onst PRIVATE_KEY = "0b04d7f7099c07632b43b6e259e37cb44b8cf329cd1dce423d0523aa98d91737"
// const AUTONITY_RPC = "http://127.0.0.1:8545"
// const GAS_PRICE = 10000000000000
// const NETWORK_ID = 444800

module.exports = {
  networks: {
    development: {
      provider: () =>  new PrivateKeyProvider(PRIVATE_KEY, AUTONITY_RPC),
      network_id: "*"
    },
//    Replace it for Autonity network with private key provider
//    development: {
//      provider: () =>  new PrivateKeyProvider(PRIVATE_KEY, AUTONITY_RPC),
//      gas: GAS,
//      gasPrice: GAS_PRICE,
//      network_id: NETWORK_ID
//    },

//    Replace it for Autonity network with keystore provider
//    development: {
//      provider: new KeystoreProvider(AUTONITY_RPC, PATH_TO_KEYSTORE_FILE, OPTIONAL_PASSWORD),
//      gas: GAS,
//      gasPrice: GAS_PRICE,
//      network_id: NETWORK_ID
//  }
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
