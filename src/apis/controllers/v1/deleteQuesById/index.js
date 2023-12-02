const QuestionService = require('@root/src/apis/services/v1/deleteQuesById');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to delete a exam by ID
const deleteQuesById = async (req, res, next) => {
    try {
        const examId = req.query.examId;

        const quesId = req.query.quesId

        const deletedExam = await QuestionService.deleteQuesById(examId, quesId);

        const result = {};

        if (!deletedExam) {
            return HttpResponseHandler.success(req, res, result);
        }

        return HttpResponseHandler.success(req, res, result);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    deleteQuesById
};
