const QuestionData = require('@models/Question');
// Service function to get a single teacher by ID
const getExamQuesDetails = async (examId) => {
    try {
        const exam = await QuestionData.find({ examId: examId });
        return exam;
    } catch (error) {
        throw new Error('Failed to get exam Details');
    }
};
module.exports = {
    getExamQuesDetails
} 
