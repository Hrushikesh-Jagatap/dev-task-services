const ExamData = require('@models/Exam');
const PanelExamData = require('@models/PanelExam');

const getAllExams = async (userId) => {
  try {
    const exams = await ExamData.find({ userId });
    const panelExams = await PanelExamData.find({ userId });

    return { exams, panelExams };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllExams
};
