const QuestionData = require('@models/Question');

// Service function to update a ques by ID
const editQuesById = async (quesId, quesData) => {
  try {
    const updatedExam = await QuestionData.findByIdAndUpdate(quesId, quesData, { new: true });
    return updatedExam;
  } catch (error) {
    throw new Error('Failed to update Exam');
  }
};

module.exports = {
    editQuesById,
};
