const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', '')
const source = fs.readFileSync(lotteryPath, 'urf-8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];