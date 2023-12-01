const mongoose = require('mongoose');
// Define a schema for the Question model (used within Exam)
const questionSchema = new mongoose.Schema({
    examId: {
        type: String
    },
    
    questionType: {
        type: String,
        // required: true
    },
    question: String,
    level: String,
    options: [String],
    correctAnswer: Number, // Store the index of the correct option
    solution: String,
    markPerQues: {
        type: Number
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
const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
