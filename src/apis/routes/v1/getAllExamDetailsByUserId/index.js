const express = require('express');

const router = express.Router();

const getAllExamByUserIdController = require('@controllers/v1/getAllExamDetailsByUserId')

router.get('/getAllExam',async(req, res, next) => {
    try {
        const result = await getAllExamByUserIdController.getAllExam(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
