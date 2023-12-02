const express = require('express');

const router = express.Router();

const deleteQuesByIdController = require('@controllers/v1/deleteQuesById')

router.delete('/delete-ques',async(req, res, next) => {
    try {
        const result = await deleteQuesByIdController.deleteQuesById(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
