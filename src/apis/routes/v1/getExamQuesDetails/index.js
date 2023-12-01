const express = require('express');

const router = express.Router();

const getExamQuesDetaialsByIdController = require('@root/src/apis/controllers/v1/getExamQuesDetails')

router.get('/exam-ques',async(req, res, next) => {
    try {
        const result = await getExamQuesDetaialsByIdController.getExamQuesDetails(req, res, next);
    
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
