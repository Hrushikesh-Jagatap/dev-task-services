
const mongoose = require('mongoose');


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
    language: {
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

    targetExam: {
        type: String
    },

    createdBy: {
        type: String
    },
    
  price: {
        type: Number,
        // required: true
    },
    questions: [],

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

    examType: {
        type: String
    },

    isDeleted: {
        type: Boolean,
        default: false,
    },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
