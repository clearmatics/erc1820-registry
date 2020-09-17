# [🔗](/interfaces/IERC1820Implementer.sol#L3) IERC1820Implementer
**Author** _Jordi Baylina and Jacques Dafflon_

For more details, see https://eips.ethereum.org/EIPS/eip-1820
# Functions
## [🔗](/interfaces/IERC1820Implementer.sol#L12) `canImplementInterfaceForAddress(bytes32 interfaceHash, address addr)`

Indicates whether the contract implements the interface `interfaceHash` for the address `addr`.




### Parameters
* `interfaceHash` keccak256 hash of the name of the interface
* `addr` Address for which the contract will implement the interface
### Returns
* `bytes32` ERC1820_ACCEPT_MAGIC only if the contract implements `ìnterfaceHash` for the address `addr`.

