// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

contract Inbox {
    string public message;

    constructor(string memory initialValue) {
        message = initialValue;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
