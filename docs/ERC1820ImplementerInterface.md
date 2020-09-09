# [🔗](/contracts/ERC1820ImplementerInterface.sol#L4) ERC1820ImplementerInterface
# Functions
## [🔗](/contracts/ERC1820ImplementerInterface.sol#L7) `canImplementInterfaceForAddress(bytes32 interfaceHash, address addr)`

Indicates whether the contract implements the interface `interfaceHash` for the address `addr`.




### Parameters
* `interfaceHash` keccak256 hash of the name of the interface
* `addr` Address for which the contract will implement the interface
### Returns
* `bytes32` ERC1820_ACCEPT_MAGIC only if the contract implements `ìnterfaceHash` for the address `addr`.

