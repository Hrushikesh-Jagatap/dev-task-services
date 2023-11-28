
const express = require('express');

const router = express.Router();

const PanelExamController = require('@controllers/v1/PanelExam');

router.post('/panelExams', async (req, res, next) => {
  
    try {
      
        const result = await PanelExamController.createPanelExam(req, res, next);
    
    } catch (error) {
        next(error);
    }
});

module.exports = router;

