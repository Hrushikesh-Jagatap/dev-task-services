const ExamData = require('@models/Exam');
const PanelExamData = require('@models/PanelExam');

const getExamDetailsStatus = async (status) => {
    try {
        const [exams, panelExams] = await Promise.all([
            ExamData.find(status).exec(),
            PanelExamData.find(status).exec(),
        ]);

        return { exams, panelExams };
    } catch (error) {
        console.error('Error in getExamDetailsStatus:', error);
        throw new Error('Failed to get exam details');
    }
};

module.exports = {
    getExamDetailsStatus,
};



