const ExamService = require('@root/src/apis/services/v1/addques');

const { HttpResponseHandler } = require('intelli-utility');

// update /exam
const addquesById = async (req, res, next) => {

  const { userId } = req.body;

  
  try {
    const addQues = await ExamService.addQuestion(req.body);

    if (!addQues) {
      return HttpResponseHandler.success(req, res, addQues);
    }

    return HttpResponseHandler.success(req, res, addQues);

  } catch (error) {
    next(error);
  }
};

module.exports = {
    addquesById,
};
