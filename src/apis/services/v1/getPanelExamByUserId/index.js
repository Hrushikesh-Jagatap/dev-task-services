const PanelExamData = require('@models/PanelExam');

// Service function to get a single teacher by ID
const getPanelExamDetailsId = async (userId) => {
  try {
    const Panelexam = await PanelExamData.find({userId});
    return Panelexam;
  } catch (error) {
    throw new Error('Failed to get exam Details');
  }
};

module.exports = {
    getPanelExamDetailsId
}  
