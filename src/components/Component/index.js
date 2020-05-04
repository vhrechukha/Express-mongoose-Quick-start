const SomeService = require('./service');
const SomeValidation = require('./validation');
const ValidationError = require('../../error/ValidationError');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function someFunction(req, res, next) {
    try {
        const { error } = SomeValidation.find(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        const data = await SomeService.getChartData();
        return res.status(200).json(data);
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                error: error.name,
                details: error.message,
            });
        }
        
        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}


module.exports = {
    someFunction,
};
