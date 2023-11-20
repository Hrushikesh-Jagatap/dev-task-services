

const ExamSeries = require('@models/examseries');


const createExamSeries = async (examData) => {
  try {
    const createdExamSeries = await ExamSeries.create(examData);
    return createdExamSeries;
  } catch (error) {
    throw new Error('Failed to create Exam');
  }
}

module.exports = {
  createExamSeries,
};
