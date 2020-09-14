# [🔗](/interfaces/IERC1820Implementer.sol#L8) IERC1820Implementer
# Functions
## [🔗](/interfaces/IERC1820Implementer.sol#L11) `canImplementInterfaceForAddress(bytes32 interfaceHash, address addr)`

Indicates whether the contract implements the interface `interfaceHash` for the address `addr`.




### Parameters
* `interfaceHash` keccak256 hash of the name of the interface
* `addr` Address for which the contract will implement the interface
### Returns
* `bytes32` ERC1820_ACCEPT_MAGIC only if the contract implements `ìnterfaceHash` for the address `addr`.

