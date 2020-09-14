pragma solidity ^0.5.3;

/** 
* @title ERC1820 Implementer Interface
* @author Jordi Baylina and Jacques Dafflon
*/

interface ERC1820ImplementerInterface {
    bytes32 constant ERC1820_ACCEPT_MAGIC = keccak256(abi.encodePacked("ERC1820_ACCEPT_MAGIC"));

    /**
    * @notice Indicates whether the contract implements the interface `interfaceHash` for the address `addr`.
    * @param interfaceHash keccak256 hash of the name of the interface
    * @param addr Address for which the contract will implement the interface
    * @return ERC1820_ACCEPT_MAGIC only if the contract implements `ìnterfaceHash` for the address `addr`.
    */
    function canImplementInterfaceForAddress(bytes32 interfaceHash, address addr) external view returns(bytes32);
}
