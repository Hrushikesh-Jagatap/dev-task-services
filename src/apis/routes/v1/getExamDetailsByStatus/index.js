const express = require('express');

const router = express.Router();

const getExamDetaialsByStatusController = require('@root/src/apis/controllers/v1/getExamDetailsByStatus')

router.get('/exam-status',async(req, res, next) => {
    try {
        const result = await getExamDetaialsByStatusController.getExamDetailsStatus(req, res, next);
    
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
