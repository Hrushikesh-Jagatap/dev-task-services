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

// // Usage example
// const newResource = new Resource({
//   class: 'Math',
//   userId: '123456',
//   tag: 'Algebra',
//   name: 'Algebraic Equations',
//   description: 'A resource on solving algebraic equations',
//   price: 9.99,
//   publishedBy: 'John Doe'
// });

// // Save the resource document to the database
// newResource.save()
//   .then(() => {
//     console.log('Resource saved successfully');
//   })
//   .catch((error) => {
//     console.error('Error saving resource:', error);
//   });
