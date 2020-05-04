const express = require('express');
const http = require('http');
const SomeRouter = require('../components/Books/router');

module.exports = {
    /**
     * @function
     * @param {express.Application} app
     * @summary init Application router
     * @returns void
     */
    init(app) {
        const router = express.Router();

        /**
         * Forwards any requests to the /v1/books URI to BooksRouter.
         * @name /v1/router
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/router', SomeRouter);

        /**
         * @description No results returned mean the object is not found
         * @function
         * @inner
         * @param {callback} middleware - Express middleware.
         */
        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        /**
         * @function
         * @inner
         * @param {express.Router}
         */
        app.use(router);
    },
};
