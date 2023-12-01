const express = require('express');

const router = express.Router();

const addquesByIdExamController = require('@controllers/v1/addques');

router.post('/create-question', async(req, res, next) => {
    try {
        const result = await addquesByIdExamController.addquesById(req, res, next);
    } catch (error) {
        next(error);
    } 
});

module.exports = router;
