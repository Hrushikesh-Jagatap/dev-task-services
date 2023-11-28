const express = require('express');

const router = express.Router();

const getResourceDetaialsController = require('@root/src/apis/controllers/v1/getResourceBysubject')

router.get('/resources/getsubject', async (req, res, next) => {
    try {
        const result = await getResourceDetaialsController.getResourceDetailsById(req, res, next);

    } catch (error) {
        next(error);
    }
});

module.exports = router;
