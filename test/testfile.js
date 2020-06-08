const { describe, it } = require("mocha");
const { expect } = require('./index');

describe('a test', function() {
    it('runs', function(){
        expect(2 + 2).to.equal(4);
    });
});
