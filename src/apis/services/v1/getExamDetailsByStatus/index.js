const ExamData = require('@models/Exam');

const getExamDetailsStatus = async (status) => {
    try {
        const examDetails = await ExamData.find(status).exec();
        return examDetails;
    } catch (error) {
        console.error('Error in getExamDetailsStatus:', error);
        throw new Error('Failed to get exam details');
    }
};

module.exports = {
    getExamDetailsStatus
}



