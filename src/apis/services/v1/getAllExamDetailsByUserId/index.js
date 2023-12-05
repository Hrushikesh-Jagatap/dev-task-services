const ExamData = require('@models/Exam');
const PanelExamData = require('@models/PanelExam');

const getAllExams = async (userId) => {
  try {
    // Execute both queries concurrently using Promise.all
    const [exams, panelExams] = await Promise.all([
      ExamData.find({ userId }).exec(),
      PanelExamData.find({ userId }).exec(),
    ]);

    return { exams, panelExams };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllExams
};
