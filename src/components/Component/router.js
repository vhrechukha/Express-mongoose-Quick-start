const { Router } = require('express');
const SomeComponent = require('.');

/**
 * Express router to mount books related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of books.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', SomeComponent.someFunction);

module.exports = router;
