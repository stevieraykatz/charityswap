// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Charity {
    address charityAddress;
    mapping(address => bool) tokenAllowed;    
}

struct AppStorage {
    mapping(uint256 => Charity) CharitiesById;
    address marketPlaceDiamond;
}
