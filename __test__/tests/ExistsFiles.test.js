const chai = require('chai');
const path = require('path');

// expect path
chai.use(require('chai-fs'));

const { expect } = chai;

describe('EXIST FILES', () => {
    it('Package.json', (done) => {
        expect(path.join(__dirname, '../../package.json')).to.be.a.path();

        done();
    });
    it('Package-lock.json', (done) => {
        expect(path.join(__dirname, '../../package-lock.json')).to.be.a.path();

        done();
    });
    it('CodeStyle', (done) => {
        expect(path.join(__dirname, '../../.eslintrc.json')).to.be.a.path();

        done();
    });
    it('CodeFormat', (done) => {
        expect(path.join(__dirname, '../../.editorconfig')).to.be.a.path();

        done();
    });
    it('Project', (done) => {
        expect(path.join(__dirname, '../../src')).to.be.a.path();

        done();
    });
    it('Tests', (done) => {
        expect(path.join(__dirname, '../../__test__')).to.be.a.path();

        done();
    });
    it('.gitignore', (done) => {
        expect(path.join(__dirname, '../../.gitignore')).to.be.a.path();

        done();
    });
    it('README.MD', (done) => {
        expect(path.join(__dirname, '../../README.MD')).to.be.a.path();

        done();
    });
});
