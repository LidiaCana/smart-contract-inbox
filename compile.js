// compile code will go here
const path = require("path");
const fs = require("fs");

const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

var input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));
const bytecode = output.contracts["Inbox.sol"].Inbox.evm.bytecode.object;
const abi = output.contracts["Inbox.sol"].Inbox.abi;

module.exports = { abi, bytecode };
