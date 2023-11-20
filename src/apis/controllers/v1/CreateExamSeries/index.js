const ExamSeriesservices = require('@services/v1/CreateExamSeries');
const { HttpResponseHandler } = require('intelli-utility');


// POST // create exam
const createExamSeries = async (req, res, next) => {

  try {

    const examData = req.body;

    const createdExam = await ExamSeriesservices.createExamSeries(examData);

    if (!createdExam) {
      return HttpResponseHandler.success(req, res, createdExam);
    }

    return HttpResponseHandler.success(req, res, createdExam);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createExamSeries,
};
