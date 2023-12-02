const QuestionData = require('@models/Question');

// Service function to delete a Exam by ID
const deleteQuesById = async (examId, quesId) => {
  try {
    const deletedQues = await QuestionData.findByIdAndUpdate({ _id: quesId }, { isDeleted: true });
    return {};
  } catch (error) {
    throw new Error('Failed to delete Exam');
  }
};

module.exports = {
    deleteQuesById
}
