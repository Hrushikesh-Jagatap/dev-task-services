
const mongoose = require('mongoose');

// Define a schema for the Question model (used within Exam)
const questionSchema = new mongoose.Schema({
    questionType: {
        type: String,
        // required: true
    },
    question: String,
    level: String,
    options: [String],
    correctAnswer: Number, // Store the index of the correct option
    solution: String,
  
});

// Define the Exam schema
const examSchema = new mongoose.Schema({

    examName: {
        type: String
    },

    userId: {
        type: String
    },

    publisehdBy: {
        type: String
    },

    examDuration: {
        type: String,
        // required: true
    },

    numberOfQuestions: {
        type: Number,
        // required: true
    },

    subject: {
        type: String
    },

    chapter: {
        type: String
    },

    Topic: {
        type: String
    },

    subTopic: {
        type: String
    },

    createdBy: {
        type: String
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

    totalNoMarks: {
        type: String
    },
    markPerQues: {
        type: Number
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
