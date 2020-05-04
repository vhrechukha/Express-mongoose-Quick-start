const BooksModel = require('./model');

/**
 * @method getSomeData
 * @param {any}
 * @returns {any}
 */
function getSomeData() {
    return BooksModel.find({}).exec();
}

module.exports = {
    getSomeData,
};
