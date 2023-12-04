
const ExamService = require('@root/src/apis/services/v1/getPanelExamByUserId')

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single batch by  teacherid
const getPanelExamDetailsId = async (req, res, next) => {
    try {
        const userId = req.query.userId;
        
        const exam = await ExamService.getPanelExamDetailsId(userId);

        if (!exam) {
            return HttpResponseHandler.success(req, res, exam);
        }

        return HttpResponseHandler.success(req, res, exam);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPanelExamDetailsId
}  
