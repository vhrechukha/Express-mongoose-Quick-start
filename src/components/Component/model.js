const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const SomeSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'collection',
        versionKey: false,
    },
);

module.exports = connections.model('SomeModel', SomeSchema);
