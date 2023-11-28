const PanelService = require('@services/v1/PanelExam');
const { HttpResponseHandler } = require('intelli-utility');

// POST // create  Panel exam
const createPanelExam = async (req, res, next) => {

  try {

    const panelExamData = req.body;

    const savedPanelExam = await PanelService.createPanelExam(panelExamData);

    if (!savedPanelExam) {
      return HttpResponseHandler.success(req, res, savedPanelExam, 201);
    }

    return HttpResponseHandler.success(req, res, savedPanelExam, 201);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPanelExam,
};
