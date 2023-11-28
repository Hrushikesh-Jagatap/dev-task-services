const PanelExam = require('@models/PanelExam');

// Create Panel Exam
const createPanelExam = async (examData) => {
  try {
    const panelExam = await PanelExam.create(examData);
    return panelExam;
  } catch (error) {
    throw new Error('Failed to create  Panel Exam');
  }
}

module.exports = {
  createPanelExam,
};
