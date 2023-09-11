const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const { Console } = require('console');

const provider = new HDWalletProvider(
    'hole combine farm stairs winner priority huge pluck genius dry pass appear',
    'https://eth‑sepolia‑public.unifra.io'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('contract deployed to', result.options.address);
}

deploy();
