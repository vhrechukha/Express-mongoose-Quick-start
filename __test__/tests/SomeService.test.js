const chai = require('chai');

const UtilService = require('../../src/components/Component/service');

const { expect } = chai;

describe('SomeComponent -> service', () => {
    it('SomeComponent -> service -> find', (done) => {
        UtilService.find()
            .then((body) => {
                const expectBody = expect(body);
                expectBody.to.be.an('array');
                done();
            })
            .catch(done);
    });
});
