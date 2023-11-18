const mongoose = require('mongoose');

// Define a schema for the Question model (used within Assignment)
const questionSchema = new mongoose.Schema({
    questionType: {
        type: String,
        required: true
    },
    question: String,
    level: String,
    options: [String],
    correctAnswer: Number, // Store the index of the correct option
    solution: String,
});

// Define the Assignment schema
const assignmentSchema = new mongoose.Schema({
    batchId: {
        type: String,
    },
    questions: [questionSchema],
    publishStatus: {
        type: String,
        default: 'draft',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    teacherId: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;