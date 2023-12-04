const ExamService = require('@root/src/apis/services/v1/getAllExamDetailsByUserId');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a Assignment  by  Batch ID
const getAllExam = async (req, res, next) => {
    try {
        
        const userId = req.query.userId;

        const resources = await ExamService.getAllExams(userId);

        if (!resources) {
            return HttpResponseHandler.success(req, res, resources);
        }
        
        return HttpResponseHandler.success(req, res, resources);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllExam
}  
