const mongoose = require('mongoose');

const examseries = new mongoose.Schema({
  admin_id: {
    type: String
  },

  price: {
    type: String
  },

  questionType: {
    type: String
  },

  question: {
    type: String
  },

  level: {
    type: String
  },

  options: [String],

  correctAnswer: {
    type: String
  },

  solution: {
    type: String
  },

},
  { timestamps: true });

const Exam_series = mongoose.model('Exam_series', examseries);

module.exports = Exam_series;