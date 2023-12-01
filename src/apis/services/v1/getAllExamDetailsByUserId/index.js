const ExamData = require('@models/Exam');

const getAllExam = async (userId) => {
  try {
    const examDetails = await ExamData.find({ userId:userId });
    return examDetails;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getAllExam
};
