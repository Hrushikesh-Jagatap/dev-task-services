const mongoose = require('mongoose');

const examseries = new mongoose.Schema({
  admin_id:String,
  price:String,
  questionType:String,
  question:String,
  level:String,
  options:[String],
  correctAnswer:String,
  solution:String,

},
{ timestamps: true }); 

const Exam_series = mongoose.model('Exam_series', examseries);

module.exports = Exam_series;