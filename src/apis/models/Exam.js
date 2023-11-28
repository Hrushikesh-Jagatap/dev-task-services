const { boolean } = require('joi');
const mongoose = require('mongoose');

// Define a schema for the Question model (used within Exam)
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

// Define the Exam schema
const examSchema = new mongoose.Schema({
    batchId: {
        type: String,
        required: true,
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
        required: true,
    },

    isDeleted: {
        type: Boolean,
        default: false,
    },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;