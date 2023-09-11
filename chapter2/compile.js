const path = require('path');
const fs = require('fs');
const solc = require('solc');

const indexPath = path.resolve(__dirname, 'contracts', '')
const source = fs.readFileSync(indexPath, 'urf-8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];