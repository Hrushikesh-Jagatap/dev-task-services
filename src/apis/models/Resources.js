const mongoose = require('mongoose');

// Define the schema for the "Resource" collection
const resourceSchema = new mongoose.Schema({
    class: {
        type: String,
        // required: true
    },
    subject: {
        type:String
    },
    language: {
        type:String
    },
    userId: {
        type: String,
        // required: true
    },
    tag: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    publishedBy: {
        type: String,
        // required: true
    },
    pdfUrl: {
        type: String,
    },
    publishStatus: {
        type: String,
        default: 'draft',
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
