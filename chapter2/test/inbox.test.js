const Web3 = required('web3');
const web3 = new Web3(ganache.Provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deployed({ data: bytecode, arguments: ['Hi'] })
      .send({ from: accounts[0], gas: '1000000' })
});

describle('Inbox', () => {
    it('deploy', () => {
        console.log(inbox);
    })
})