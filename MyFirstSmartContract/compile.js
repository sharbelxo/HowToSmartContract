const path = require('path');
const fs = require('fs');
const solc = require('solc');

const namePath = path.resolve(__dirname, 'contracts', 'Name.sol');
const source = fs.readFileSync(namePath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Name.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Name.sol'].Name;