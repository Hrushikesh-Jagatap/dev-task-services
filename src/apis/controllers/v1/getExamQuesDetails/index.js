const QuesService = require('@root/src/apis/services/v1/getExamQuesDetails');

const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single batch by  teacherid


const getExamQuesDetails = async (req, res, next) => {
    try {
        const examId = req.query.examId
        const examDetailQues = await QuesService.getExamQuesDetails(examId);
        if (!examDetailQues) {
            return HttpResponseHandler.success(req, res, examDetailQues);
        }
        return HttpResponseHandler.success(req, res, examDetailQues);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    getExamQuesDetails
}  
