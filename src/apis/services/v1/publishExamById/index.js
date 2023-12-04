const ExamData = require('@models/Exam');

// Service function to get a single teacher by ID
const publishExamById = async (examId, publishStatus) => {
  try {
    const exam = await ExamData.findByIdAndUpdate({ _id: examId }, { publishStatus: publishStatus });
    return exam;
  } catch (error) {
    throw new Error('Failed to publish  ExamData');
  }
};

module.exports = {
  publishExamById
}  
