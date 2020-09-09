# [🔗](/contracts/ERC1820Registry.sol#L32) ERC1820ImplementerInterface
The interface a contract MUST implement if it is the implementer of some (other) interface for any address other than itself.



# Functions
## [🔗](/contracts/ERC1820Registry.sol#L35) `canImplementInterfaceForAddress(bytes32 interfaceHash, address addr)`

Indicates whether the contract implements the interface 'interfaceHash' for the address 'addr' or not.




### Parameters
* `interfaceHash` keccak256 hash of the name of the interface
* `addr` Address for which the contract will implement the interface
### Returns
* `bytes32` ERC1820_ACCEPT_MAGIC only if the contract implements 'interfaceHash' for the address 'addr'.

## [🔗](/contracts/ERC1820Registry.sol#L67) `getInterfaceImplementer(address _addr, bytes32 _interfaceHash)`

Query if an address implements an interface and through which contract.




### Parameters
* `_addr` Address being queried for the implementer of an interface.     (If '_addr' is the zero address then 'msg.sender' is assumed.)
* `_interfaceHash` Keccak256 hash of the name of the interface as a string.     E.g., 'web3.utils.keccak256("ERC777TokensRecipient")' for the 'ERC777TokensRecipient' interface.
### Returns
* `address` The address of the contract which implements the interface '_interfaceHash' for '_addr'     or '0' if '_addr' did not register an implementer for this interface.

## [🔗](/contracts/ERC1820Registry.sol#L83) `setInterfaceImplementer(address _addr, bytes32 _interfaceHash, address _implementer)`

Sets the contract which implements a specific interface for an address.     Only the manager defined for that address can set it.     (Each address is the manager for itself until it sets a new manager.)


### Parameters
* `_addr` Address for which to set the interface.     (If '_addr' is the zero address then 'msg.sender' is assumed.)
* `_interfaceHash` Keccak256 hash of the name of the interface as a string.     E.g., 'web3.utils.keccak256("ERC777TokensRecipient")' for the 'ERC777TokensRecipient' interface.
* `_implementer` Contract address implementing '_interfaceHash' for '_addr'.

## [🔗](/contracts/ERC1820Registry.sol#L107) `setManager(address _addr, address _newManager)`

Sets '_newManager' as manager for '_addr'.     The new manager will be able to call 'setInterfaceImplementer' for '_addr'.




### Parameters
* `_addr` Address for which to set the new manager.
* `_newManager` Address of the new manager for 'addr'. (Pass '0x0' to reset the manager to '_addr'.)

## [🔗](/contracts/ERC1820Registry.sol#L117) `getManager(address _addr)`

Get the manager of an address.




### Parameters
* `_addr` Address for which to return the manager.
### Returns
* `address` Address of the manager for a given address.

## [🔗](/contracts/ERC1820Registry.sol#L129) `interfaceHash(string _interfaceName)`

Compute the keccak256 hash of an interface given its name.




### Parameters
* `_interfaceName` Name of the interface.
### Returns
* `bytes32` The keccak256 hash of an interface name.

## [🔗](/contracts/ERC1820Registry.sol#L139) `updateERC165Cache(address _contract, bytes4 _interfaceId)`

Updates the cache with whether the contract implements an ERC165 interface or not.




### Parameters
* `_contract` Address of the contract for which to update the cache.
* `_interfaceId` ERC165 interface for which to update the cache.

## [🔗](/contracts/ERC1820Registry.sol#L148) `implementsERC165Interface(address _contract, bytes4 _interfaceId)`

Checks whether a contract implements an ERC165 interface or not.      If the result is not cached a direct lookup on the contract address is performed.      If the result is not cached or the cached value is out-of-date, the cache MUST be updated manually by calling     'updateERC165Cache' with the contract address.




### Parameters
* `_contract` Address of the contract to check.
* `_interfaceId` ERC165 interface to check.
### Returns
* `bool` True if '_contract' implements '_interfaceId', false otherwise.

## [🔗](/contracts/ERC1820Registry.sol#L162) `implementsERC165InterfaceNoCache(address _contract, bytes4 _interfaceId)`

Checks whether a contract implements an ERC165 interface or not without using nor updating the cache.




### Parameters
* `_contract` Address of the contract to check.
* `_interfaceId` ERC165 interface to check.
### Returns
* `bool` True if '_contract' implements '_interfaceId', false otherwise.

## [🔗](/contracts/ERC1820Registry.sol#L187) `isERC165Interface(bytes32 _interfaceHash)`

Checks whether the hash is a ERC165 interface (ending with 28 zeroes) or not.




### Parameters
* `_interfaceHash` The hash to check.
### Returns
* `bool` True if '_interfaceHash' is an ERC165 interface (ending with 28 zeroes), false otherwise.

## [🔗](/contracts/ERC1820Registry.sol#L194) `noThrowCall(address _contract, bytes4 _interfaceId)`

Make a call on a contract without throwing if the function does not exist.




### Parameters
* `_contract` 
* `_interfaceId` 
### Returns
* `uint256 success`
* `uint256 result`

