const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
//updated web3 and hdwallet-provider imports added for convenience
const { abi, bytecode } = require("./compile");
// deploy code will go here

const provider = new HDWalletProvider("mneomonic phares", "infura link api");
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: 1000000, from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};
deploy();
