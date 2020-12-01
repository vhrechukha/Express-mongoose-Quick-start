const SomeModel = require('./model');

/**
 * @method getSomeData
 * @param {any}
 * @returns {any}
 */
function getSomeData() {
    return SomeModel.find({}).exec();
}

module.exports = {
    getSomeData,
};
