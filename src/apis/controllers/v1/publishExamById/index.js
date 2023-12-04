const ExamService = require('@root/src/apis/services/v1/publishExamById');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get 
const publishExamById = async (req, res, next) => {
    try {
        const publishStatus = req.body.publishStatus;

        const Exam = await ExamService.publishExamById(req.params.Id, publishStatus);

        if (!Exam) {
            return HttpResponseHandler.success(req, res, Exam);
        }

        return HttpResponseHandler.success(req, res, Exam);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    publishExamById
}  
