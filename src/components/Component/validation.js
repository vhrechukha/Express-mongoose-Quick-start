const Validation = require('../validation');

/**
 * @exports
 * @class
 * @extends Validation
 */
class SomeValidation extends Validation {
    /**
     * @param {String} data.id - objectId
     * @returns
     * @memberof SomeValidation
     */
    find(data) {
        return this.Joi
            .object({
                someParam: this.Joi
                    .objectId(),
                someParam2: this.Joi
                    .string()
                    .required(),
            })
            .validate(data);
        }
}

module.exports = new UserValidation();
