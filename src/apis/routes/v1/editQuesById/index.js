const express = require('express');

const router = express.Router();

const EditQuesByIdController = require('@controllers/v1/editQuesById')

router.put('/edit-question', async(req, res, next) => {
    try {
        const result = await EditQuesByIdController.editQuesById(req, res, next);

    } catch (error) {
        next(error);
    } 

});

module.exports = router;
