const express = require('express');

const router = express.Router();

const getResourceDetaialsByIdController = require('@root/src/apis/controllers/v1/getResourceById')

router.get('/resources/:id', async (req, res, next) => {

    try {
        const result = await getResourceDetaialsByIdController.getResourceDetailsById(req, res, next);

    } catch (error) {
        next(error);
    }
});

module.exports = router;
