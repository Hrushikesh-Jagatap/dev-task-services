const QuestionService = require('@root/src/apis/services/v1/editQuesById');
const { HttpResponseHandler } = require('intelli-utility');

// update /exam
const editQuesById = async (req, res, next) => {
  try {
    const quesId = req.query.quesId;
    const updateQues = await QuestionService.editQuesById(quesId, req.body);

    if (!updateQues) {
      return HttpResponseHandler.success(req, res, updateQues);
    }

    return HttpResponseHandler.success(req, res, updateQues);

  } catch (error) {
    next(error);
  }
};

module.exports = {
    editQuesById,
};
