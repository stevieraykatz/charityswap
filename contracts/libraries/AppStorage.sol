// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Account {
    // spender => amount    
    mapping(address => bool) ticketsApproved;    
    uint40 lastFrensUpdate;    
    uint256 poolTokens;
    uint256 frens;    
}

struct Ticket {
    // user address => balance
    mapping(address => uint256) accountBalances;
    uint256 totalSupply;
}

struct AppStorage {
    mapping(address => Account) accounts;
    mapping(uint256 => Ticket) tickets;    
    address poolContract;
    string ticketsBaseUri;    
    uint256 poolTokensRate;
    address marketPlaceDiamond ;
}
