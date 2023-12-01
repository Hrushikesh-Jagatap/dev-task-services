const QuestionData = require('@models/Question');

const addQuestion = async (questionData) => {
    try {
      const newQues = await QuestionData.create(questionData);
      return newQues;
    } catch (error) {
      throw new Error('Failed to create new Question');
    }
  };

  module.exports = {
    addQuestion
  }
