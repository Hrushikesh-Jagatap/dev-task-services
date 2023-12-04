
const ExamService = require('@root/src/apis/services/v1/getExamDetailsByStatus')

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single batch by  teacherid
const getExamDetailsStatus = async (req, res, next) => {
    try {
        const exam = await ExamService.getExamDetailsStatus(req.query);

        if (!exam) {
            return HttpResponseHandler.success(req, res, exam);
        }

        return HttpResponseHandler.success(req, res, exam);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getExamDetailsStatus
}  
