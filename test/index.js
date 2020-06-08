const { before } = require('mocha');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const chaiSorted = require('chai-sorted');

before(function () {
    try {
        chai.should();
        chai.use(chaiAsPromised);
        chai.use(sinonChai);
        chai.use(chaiSorted);
    } catch (error) {
        console.log(`Initialization failed:  ${error.stack}`);
        process.exit(1);
    }
});

module.exports = chai;
