# [🔗](/interfaces/IERC1820Registry.sol#L3) IERC1820Registry
**Author** _Jordi Baylina and Jacques Dafflon_

For more details, see https://eips.ethereum.org/EIPS/eip-1820
# Functions
## [🔗](/interfaces/IERC1820Registry.sol#L11) `getInterfaceImplementer(address _addr, bytes32 _interfaceHash)`

Query if an address implements an interface and through which contract.




### Parameters
* `_addr` Address being queried for the implementer of an interface.
(If `_addr` is the zero address then `msg.sender` is assumed.)
* `_interfaceHash` Keccak256 hash of the name of the interface as a string.
E.g., `web3.utils.keccak256("ERC777TokensRecipient")` for the `ERC777TokensRecipient` interface.
### Returns
* `address` The address of the contract which implements the interface `_interfaceHash` for `_addr`
or `0` if `_addr` did not register an implementer for this interface.

## [🔗](/interfaces/IERC1820Registry.sol#L22) `setInterfaceImplementer(address _addr, bytes32 _interfaceHash, address _implementer)`

Sets the contract which implements a specific interface for an address.

Only the manager defined for that address can set it.

(Each address is the manager for itself until it sets a new manager.)


### Parameters
* `_addr` Address for which to set the interface.
(If `_addr` is the zero address then `msg.sender` is assumed.)
* `_interfaceHash` Keccak256 hash of the name of the interface as a string.
E.g., `web3.utils.keccak256("ERC777TokensRecipient")` for the `ERC777TokensRecipient` interface.
* `_implementer` Contract address implementing `_interfaceHash` for `_addr`.

## [🔗](/interfaces/IERC1820Registry.sol#L34) `setManager(address _addr, address _newManager)`

Sets `_newManager` as manager for `_addr`.

The new manager will be able to call `setInterfaceImplementer` for `_addr`.




### Parameters
* `_addr` Address for which to set the new manager.
* `_newManager` Address of the new manager for `addr`. (Pass `0x0` to reset the manager to `_addr`.)

## [🔗](/interfaces/IERC1820Registry.sol#L42) `getManager(address _addr)`

Get the manager of an address.




### Parameters
* `_addr` Address for which to return the manager.
### Returns
* `address` Address of the manager for a given address.

## [🔗](/interfaces/IERC1820Registry.sol#L49) `interfaceHash(string _interfaceName)`

Compute the keccak256 hash of an interface given its name.




### Parameters
* `_interfaceName` Name of the interface.
### Returns
* `bytes32` The keccak256 hash of an interface name.

## [🔗](/interfaces/IERC1820Registry.sol#L59) `updateERC165Cache(address _contract, bytes4 _interfaceId)`

Updates the cache with whether the contract implements an ERC165 interface or not.




### Parameters
* `_contract` Address of the contract for which to update the cache.
* `_interfaceId` ERC165 interface for which to update the cache.

## [🔗](/interfaces/IERC1820Registry.sol#L66) `implementsERC165Interface(address _contract, bytes4 _interfaceId)`

Checks whether a contract implements an ERC165 interface or not.

If the result is not cached a direct lookup on the contract address is performed.

If the result is not cached or the cached value is out-of-date, the cache MUST be updated manually by calling `updateERC165Cache` with the contract address.




### Parameters
* `_contract` Address of the contract to check.
* `_interfaceId` ERC165 interface to check.
### Returns
* `bool` True if `_contract` implements `_interfaceId`, false otherwise.

## [🔗](/interfaces/IERC1820Registry.sol#L78) `implementsERC165InterfaceNoCache(address _contract, bytes4 _interfaceId)`

Checks whether a contract implements an ERC165 interface or not without using nor updating the cache.




### Parameters
* `_contract` Address of the contract to check.
* `_interfaceId` ERC165 interface to check.
### Returns
* `bool` True if `_contract` implements `_interfaceId`, false otherwise.

