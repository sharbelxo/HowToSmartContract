const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// evm: bytecode
const { abi, evm } = require('../compile');

let accounts;
let name;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    name = await new web3.eth.Contract(abi)
      .deploy({
        data: evm.bytecode.object,
      })
      .send({ from: accounts[0], gas: '1000000' });
});


describe('Name', () => {
    it('deploys a contract', () => {
      assert.ok(name.options.address);
    });
    it('can change then get the name', async () => {
        await name.methods.setName('sharbel').send({ from: accounts[0] });
        const _name = await name.methods.getName().call();
        assert.equal(_name, 'sharbel');
      });
});