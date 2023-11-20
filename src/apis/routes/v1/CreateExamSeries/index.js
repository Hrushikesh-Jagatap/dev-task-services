
const express = require('express');

const router = express.Router();

const CreateExamSeriesController = require('@controllers/v1/CreateExamSeries');

router.post('/create-exam-series', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        // const { batchName, startDate, endDate } = req.body;
        const result = await CreateExamSeriesController.createExamSeries(req, res, next);
    
    } catch (error) {
        next(error);
    }
});

module.exports = router;

